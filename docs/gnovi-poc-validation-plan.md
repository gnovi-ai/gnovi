# Gnovi: proof-of-concept validation plan

> **Parent:** [Gnovi Founding Blueprint](./gnovi-founding-blueprint.md)  
> **Version:** 1.0 · **Date:** April 9, 2026

---

## Purpose

This document defines the proof-of-concept (POC) experiments required to validate Gnovi's core technologies before committing to full implementation. Each POC targets a specific technical risk — if the POC fails, the fallback approach is documented. POCs are ordered by **priority** (blocking dependencies first) and **risk level** (highest-risk, least-proven technologies first).

---

## Priority 1 — Must validate before any implementation

### POC-1: FalkorDB + Graphiti bi-temporal integration

**What it validates:** That Graphiti can run on FalkorDB (rather than Neo4j) with full bi-temporal edge support, and that the resulting graph is queryable with sub-200ms latency for 10K+ edges.

**Why it's critical:** The entire architecture depends on FalkorDB as the graph substrate and Graphiti as the temporal memory layer. If this combination doesn't work, we need a different graph database or a different temporal memory approach.

**Implementation approach:**

1. Deploy FalkorDB v4.16+ via Docker
2. Configure Graphiti with FalkorDB backend (Graphiti officially supports FalkorDB as of v0.17)
3. Ingest 1,000 synthetic workplace events (messages, commits, tickets) with temporal metadata
4. Create entities with bi-temporal edges (4 timestamps each)
5. Execute point-in-time queries: "who owned service-X on date Y?"
6. Measure query latency, ingestion throughput, and memory usage

**Acceptance criteria:**

- Graphiti successfully creates/queries bi-temporal edges on FalkorDB
- Point-in-time queries return correct results for 100% of test cases
- P95 query latency < 200ms for graph with 10K edges
- Ingestion throughput > 100 entities/second

**Expected outcome:** High confidence of success — FalkorDB is an officially supported Graphiti backend. Risk is in edge cases with complex temporal queries.

**Fallback if POC fails:** Use Neo4j Community Edition (compatible with Graphiti but heavier resource usage) or Kuzu (lightweight, Graphiti has experimental support).

**Estimated effort:** 2-3 days

---

### POC-2: MCP schema discovery for automatic entity type inference

**What it validates:** That Gnovi can automatically discover entity types and their field structures from MCP server `tools/list` and `resources/list` responses without any manual configuration.

**Why it's critical:** The entire "self-discovering schema" claim depends on this. If MCP servers don't expose enough metadata, we need manual connector configuration — which undermines the domain-agnostic positioning.

**Implementation approach:**

1. Connect to GitHub, Slack, and Jira MCP servers
2. Call `tools/list` on each; parse `inputSchema` and `outputSchema` for every tool
3. Build a Schema Discovery Agent (LLM-based) that analyzes tool names, descriptions, and schemas to propose entity types
4. Compare proposed entity types against manually-defined ground truth for each source
5. Measure precision (proposed types that are real) and recall (real types that were proposed)

**Acceptance criteria:**

- Schema Discovery Agent correctly identifies >80% of expected entity types per source
- <10% false positive rate (proposed types that don't correspond to real entities)
- Process completes in <60 seconds per MCP server
- Works without any source-specific code (same agent prompt for all MCP servers)

**Expected outcome:** Medium confidence. MCP tool signatures expose enough metadata for common entity types (Issue, User, Repository), but relationship inference from input parameter names is less certain. The LLM-based analysis of tool descriptions adds quality but introduces non-determinism.

**Risk:** Some MCP servers may have poor tool descriptions or non-standard schemas. The 2025-06-18 `outputSchema` addition helps significantly but not all servers implement it yet.

**Fallback if POC fails:** Implement a thin adapter layer per MCP server type that maps tool schemas to entity definitions. This is more work but still much less than building full custom connectors.

**Estimated effort:** 3-4 days

---

### POC-3: GLiNER2 + GLiNKER + GLiREL extraction quality on workplace text

**What it validates:** That the GLiNER2 bi-encoder extracts meaningful entities from real Slack messages, PR descriptions, and Jira comments with dynamically-specified entity types — and that GLiNKER and GLiREL correctly link and relate them.

**Why it's critical:** Tier 3 extraction handles ~20% of all entities, specifically the ones from unstructured text that Tiers 1-2 miss. If GLiNER quality is poor on workplace text, we'll over-rely on expensive LLM extraction (Tier 4).

**Implementation approach:**

1. Collect 200 real workplace text samples (50 Slack messages, 50 PR descriptions, 50 Jira comments, 50 Confluence excerpts) — anonymized from founder's own workspace
2. Manually annotate entities and relationships as ground truth
3. Run GLiNER2 bi-encoder with workplace-relevant entity types: `["person", "service", "repository", "technology", "team", "incident", "deployment", "api_endpoint"]`
4. Run GLiNKER to link extracted entities against a synthetic knowledge graph
5. Run GLiREL to extract relationships between entity pairs
6. Measure precision, recall, F1 per entity type and relationship type

**Acceptance criteria:**

- Entity extraction: >0.60 F1 averaged across all entity types
- Entity linking: >0.70 accuracy on unambiguous entities
- Relationship extraction: >0.50 F1 (lower bar — this is harder)
- Latency: <500ms per sample on CPU (M2 MacBook or equivalent)

**Expected outcome:** Medium-high confidence for entity extraction (GLiNER2 benchmarks show 61.5% Micro-F1 on CrossNER zero-shot). Lower confidence for relationship extraction — GLiREL is less mature and workplace text has many implicit relationships.

**Fallback if POC fails:** Increase Tier 4 (LLM) coverage from 5% to 15-20%, using cheap structured-output models (Haiku, GPT-4o-mini). More expensive but higher quality. GLiNER would still handle the easy cases.

**Estimated effort:** 3-4 days

---

### POC-4: Entity resolution accuracy and false positive rate

**What it validates:** That the embedding-based entity resolution pipeline correctly merges cross-source entities (same person across GitHub/Slack/Jira) with <5% false positive merge rate.

**Why it's critical:** False merges corrupt the entire graph. A merge between two different entities cannot be easily detected after the fact because derived relationships become entangled.

**Implementation approach:**

1. Create a test dataset of 500 entities across 3 sources with known ground truth merges (100 true merges, 400 distinct entities)
2. Run Phase 1 (deterministic anchoring via email/URL matching)
3. Run Phase 2 (embedding similarity with S-MiniLM + FAISS)
4. Vary the auto-merge threshold from 0.75 to 0.95 in 0.05 increments
5. Measure precision, recall, F1 at each threshold
6. Identify the threshold that achieves <5% false positive rate

**Acceptance criteria:**

- False positive merge rate < 5% at chosen threshold
- True positive merge rate > 70% (we'd rather miss a merge than make a false one)
- Processing time < 30 seconds for 500 entities

**Expected outcome:** High confidence. Embedding-based entity matching is well-validated in literature. The main risk is in workplace-specific entity names that are short and generic ("api", "config", "frontend").

**Fallback if POC fails:** Add a mandatory LLM confirmation step for all merges scoring 0.60-0.90, making the pipeline slower but more accurate.

**Estimated effort:** 2-3 days

---

## Priority 2 — Validate before Phase 3

### POC-5: SwiftMem DAG-Tag indexing latency at scale

**What it validates:** That SwiftMem's DAG-Tag indexing achieves sub-15ms retrieval latency on 50K+ memory items, and that the LLM-generated tag hierarchy is stable enough for production use.

**Implementation approach:**

1. Generate 50K synthetic episodic memories from workplace data patterns
2. Build a DAG-Tag index using LLM-generated hierarchical tags
3. Execute 1,000 diverse queries measuring latency distribution
4. Compare against baseline exhaustive vector search

**Acceptance criteria:** P95 latency < 15ms; >80% recall compared to exhaustive search; tag generation cost < \$0.001/memory item

**Fallback:** Use standard HNSW vector search with pre-filtering by entity type and time range. Slower but proven.

**Estimated effort:** 3-4 days

---

### POC-6: Kumiho belief revision on contradiction scenarios

**What it validates:** That AGM-compliant belief revision correctly handles real-world contradictions (ownership changes, service renames, deprecated APIs) without corrupting the graph.

**Implementation approach:**

1. Create 50 contradiction scenarios from real engineering patterns (ownership transfers, architecture changes, process updates)
2. Implement minimal Kumiho-style revision: detect contradiction → create SUPERSEDES edge → invalidate old edge → log revision
3. Verify graph integrity after all 50 revisions
4. Test that queries return correct state for both current and historical time points

**Acceptance criteria:** 100% of contradictions correctly handled; zero graph corruption; historical queries return pre-revision state correctly

**Fallback:** Simpler "last write wins" with manual conflict resolution queue. Less elegant but functional.

**Estimated effort:** 3-4 days

---

### POC-7: Trinity deterministic control plane feasibility

**What it validates:** That a small Trusted Computing Base can validate LLM-proposed agent actions against a policy definition in constant time, preventing unauthorized actions regardless of prompt injection.

**Implementation approach:**

1. Define 20 action types with permission levels (read-only, write-with-approval, write-autonomous)
2. Implement a policy engine that evaluates `(user, action_type, target_entity, autonomy_level)` tuples
3. Test with 100 adversarial agent proposals (prompt injection attempts to bypass policy)
4. Measure policy evaluation latency

**Acceptance criteria:** 100% of unauthorized actions blocked; 0% false rejections of authorized actions; policy evaluation < 1ms

**Fallback:** Simpler allowlist-based action filtering without formal policy language. Less flexible but achievable.

**Estimated effort:** 2-3 days

---

## Priority 3 — Validate before Phase 4

### POC-8: DIAL-KG schema drift over sustained ingestion

**What it validates:** That the Meta-Knowledge Base governance prevents schema explosion during 30 days of continuous ingestion from 4+ sources.

**Implementation approach:**

1. Simulate 30 days of data ingestion (10K events/day from GitHub, Slack, Jira, Confluence)
2. Run DIAL-KG schema evolution with proposer-critic governance
3. Track: entity type count, relationship type count, orphan type rate, near-duplicate detection rate
4. Compare governed vs ungoverned schema evolution

**Acceptance criteria:** Entity type count stabilizes (growth rate < 2% in final week); zero near-duplicate types (embedding similarity > 0.90); orphan type rate < 5%

**Fallback:** Add manual schema review checkpoint every 7 days. Semi-automated but prevents drift.

**Estimated effort:** 5-7 days (requires sustained simulation)

---

### POC-9: MemRL Q-learning convergence on workplace feedback

**What it validates:** That MemRL's non-parametric Q-learning converges to useful memory utility scores from realistic workplace feedback patterns (which are sparse and noisy).

**Implementation approach:**

1. Simulate 1,000 agent interactions with 10% explicit feedback (thumbs up/down) and 40% implicit feedback (usage patterns)
2. Run MemRL Q-value updates with learning rate α=0.1
3. After 500 interactions, test whether high-Q memories produce better agent responses than random memory selection
4. Measure Q-value correlation with actual usefulness (Pearson r)

**Acceptance criteria:** Pearson r > 0.5 between Q-values and actual usefulness; agent response quality improvement > 10% vs random memory selection after 500 interactions

**Fallback:** Simpler frequency-based memory scoring (more frequently used memories score higher). Less adaptive but zero learning complexity.

**Estimated effort:** 3-4 days

---

### POC-10: Automated intelligence pack generation

**What it validates:** That a domain research agent can, given a domain description and sample data, automatically generate a usable intelligence pack configuration (entity types, relationship types, extraction rules, agent personas).

**Implementation approach:**

1. Provide the agent with: "sales team" domain description + 100 sample Salesforce records + 50 sample Slack messages about sales
2. Agent generates: entity types (Deal, Contact, Account, Opportunity, Pipeline_Stage), relationship types (OWNS, PROGRESSED_TO, ASSIGNED_TO), extraction rules, and agent personas
3. Compare generated pack against a manually-crafted sales intelligence pack
4. Measure: type precision, type recall, relationship accuracy

**Acceptance criteria:** >70% type recall; >80% type precision; generated pack is usable without manual editing for basic queries

**Fallback:** Semi-automated generation requiring human review and correction before activation. Still much faster than manual authoring.

**Estimated effort:** 4-5 days

---

## POC execution schedule

| Priority | POC                               | Phase blocker | Effort   | Risk level  |
| -------- | --------------------------------- | ------------- | -------- | ----------- |
| **P1**   | POC-1: FalkorDB + Graphiti        | Phase 1       | 2-3 days | Low         |
| **P1**   | POC-2: MCP schema discovery       | Phase 1       | 3-4 days | Medium      |
| **P1**   | POC-3: GLiNER extraction quality  | Phase 1       | 3-4 days | Medium      |
| **P1**   | POC-4: Entity resolution accuracy | Phase 1       | 2-3 days | Low-Medium  |
| **P2**   | POC-5: SwiftMem latency           | Phase 3       | 3-4 days | Medium      |
| **P2**   | POC-6: Kumiho belief revision     | Phase 3       | 3-4 days | Low-Medium  |
| **P2**   | POC-7: Trinity control plane      | Phase 3       | 2-3 days | Low         |
| **P3**   | POC-8: Schema drift prevention    | Phase 4       | 5-7 days | Medium-High |
| **P3**   | POC-9: MemRL convergence          | Phase 4       | 3-4 days | Medium      |
| **P3**   | POC-10: Auto intelligence pack    | Phase 5       | 4-5 days | High        |

**Total POC effort:** ~30-40 days. P1 POCs (12-14 days) should be completed in weeks 1-2 of Phase 1, before committing to the full implementation plan. P2 POCs can run in parallel with Phase 2 development. P3 POCs can run in parallel with Phase 3.

---

_Each POC that passes produces a brief results document (template: hypothesis → method → results → decision → residual risk) that becomes part of the project's technical decision log._
