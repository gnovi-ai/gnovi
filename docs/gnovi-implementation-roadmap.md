# Gnovi: detailed implementation roadmap

> **Parent:** [Gnovi Founding Blueprint](./gnovi-founding-blueprint.md)  
> **Version:** 1.0 · **Date:** April 9, 2026

---

## Overview

This document provides phase-by-phase implementation detail with specific tasks, dependencies, acceptance criteria, and milestones. Each phase builds on the previous one — later phases cannot begin until predecessor acceptance criteria are met.

**Critical path:** The system's value is gated by the knowledge graph quality. If entity extraction and resolution don't work well, nothing downstream matters. Phases 1-2 focus obsessively on getting the KG right.

---

## Phase 1 — Foundation (Weeks 1-8)

**Goal:** Core knowledge graph engine running locally with GitHub connector. A developer can clone the repo, run `docker compose up`, connect their GitHub organization, and ask questions about their codebase within 30 minutes.

**POC prerequisites:** POC-1 (FalkorDB + Graphiti), POC-2 (MCP schema discovery), POC-3 (GLiNER2 extraction quality), and POC-4 (entity resolution accuracy) must complete before Week 3 tasks begin. Run these in parallel during weeks 1-2 alongside project scaffolding. See [POC Validation Plan](./gnovi-poc-validation-plan.md) for details.

### Week 1-2: Project scaffolding and infrastructure

| Task                     | Details                                                                                                                          | Acceptance criteria                                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Monorepo setup           | Python 3.12+ with uv workspaces (backend), Turborepo (frontend), shared types                                                    | `uv sync` and `turbo build` succeed from clean clone                            |
| CLAUDE.md                | Comprehensive project context for Claude Code: architecture, conventions, file structure, testing approach                       | Claude Code can implement a new endpoint with correct patterns on first attempt |
| Docker Compose           | PostgreSQL 16 + pgvector + pgvectorscale, FalkorDB, Redis 7, FastAPI app, Celery worker, Next.js frontend                        | `docker compose up` starts all services; health checks pass                     |
| FastAPI backend skeleton | Auth (JWT), middleware, error handling, API versioning, Pydantic models                                                          | `/health`, `/api/v1/auth/login` endpoints work; OpenAPI docs render             |
| Database schema          | PostgreSQL: users, organizations, connectors, extraction_jobs, entities (with pgvector columns). FalkorDB: tenant graph creation | Migrations run cleanly; seed data loads                                         |
| CI/CD                    | GitHub Actions: lint (ruff), type check (pyright), test (pytest), build (docker)                                                 | PR checks pass/fail correctly; badge on README                                  |

### Week 3-4: Entity extraction pipeline (Tiers 1-2)

| Task                         | Details                                                                                                                                                            | Acceptance criteria                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| GitHub MCP connector         | Connect to GitHub MCP server; call `tools/list` to discover available tools; implement Schema Discovery Agent to infer entity types from tool input/output schemas | Given a GitHub MCP server, system automatically identifies Repository, PR, Issue, User, Workflow entity types without hardcoding |
| Structured entity extraction | Parse GitHub API responses (via MCP tool calls) into typed entities with relationships                                                                             | 100 GitHub entities extracted correctly from test org with zero false positives                                                  |
| Pattern Registry             | Auto-generate regex patterns from observed Tier 1 entities; store in Redis with hit rate tracking; apply to text fields                                            | Given Jira keys in PR descriptions, system auto-generates `[A-Z]+-\d+` pattern and creates cross-references                      |
| Entity storage               | PostgreSQL entity table with pgvector embeddings + FalkorDB graph nodes with typed edges                                                                           | Entities queryable via both SQL (for admin/analytics) and Cypher (for graph traversal)                                           |
| Basic entity resolution      | Phase 1 deterministic anchoring (email-based, URL-based) + Phase 2 embedding similarity with conservative 0.85 threshold                                           | Same person across GitHub and Slack correctly merged via email; no false merges on test dataset of 500 entities                  |

### Week 5-6: Temporal memory and basic retrieval

| Task                    | Details                                                                                                                             | Acceptance criteria                                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Graphiti integration    | Deploy Graphiti with FalkorDB backend; configure bi-temporal edge model (4 timestamps per edge)                                     | Entity relationships carry all 4 temporal timestamps; point-in-time queries return correct historical state              |
| Embedding pipeline      | Embed all entity names + descriptions using Qwen3-Embedding (self-hosted) or OpenAI text-embedding-3-small (API); store in pgvector | Embedding generation runs as Celery background task; 1000 entities embedded in <60 seconds                               |
| Hybrid retrieval engine | Vector search (pgvector) + graph traversal (FalkorDB Cypher) + BM25 (PostgreSQL tsvector) with Reciprocal Rank Fusion               | Given natural language query, system returns relevant entities from all three retrieval paths, fused into ranked results |
| LiteLLM integration     | BYOM configuration; per-operation model assignment; API key management per user                                                     | User can configure their own OpenAI/Anthropic/local model; system routes queries correctly                               |

### Week 7-8: CLI and deployment

| Task                             | Details                                                                                                      | Acceptance criteria                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| CLI tool (`gnovi`)               | Python CLI: `gnovi init`, `gnovi connect github`, `gnovi query "who owns auth-service?"`, `gnovi status`     | Full workflow executable from terminal: init → connect → ingest → query        |
| Docker Compose production config | Resource limits, volume mounts for persistence, env-based configuration, backup script                       | System survives restart with all data intact; config via `.env` file only      |
| Documentation                    | README, quickstart guide, architecture overview, connector development guide                                 | New developer can go from clone to working query in <30 minutes following docs |
| Test suite                       | Property-based tests (Hypothesis) for extraction; integration tests for retrieval; e2e test for CLI workflow | >80% code coverage on extraction pipeline; all tests pass in CI                |

**Phase 1 exit criteria:** A user can `docker compose up`, connect GitHub, wait for ingestion, and ask "who has contributed most to auth-service?" and get a correct, sourced answer.

---

## Phase 2 — Intelligence layer (Weeks 9-16)

**Goal:** Multi-connector, web UI, schema evolution, memory consolidation. A team of 5 can use Gnovi daily for knowledge queries.

**POC prerequisites for this phase:** POC-8 (schema drift prevention) should begin during Week 9-10 to validate DIAL-KG approach before full implementation.

### Week 9-10: Additional connectors and schema evolution

| Task                        | Details                                                                                                     | Acceptance criteria                                                                                                                                            |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jira/Linear MCP connector   | Same Schema Discovery Agent pattern as GitHub; auto-infer entity types from MCP tool schemas                | System discovers Ticket, Project, Sprint, Label entity types automatically                                                                                     |
| Slack MCP connector         | Message ingestion with incremental sync; entity extraction from message text (Tiers 2-3)                    | Slack messages produce entities; @mentions resolve to Person entities via Phase 1 ER                                                                           |
| Confluence/Notion connector | Document ingestion with chunking; entity extraction from document content                                   | Documents ingested; entities extracted; cross-references to Jira/GitHub entities created                                                                       |
| DIAL-KG Meta-Knowledge Base | Implement schema proposal → validation → promotion pipeline; schema versioning with rollback                | New entity types from Slack data proposed and validated against existing schema; schema version history queryable                                              |
| GLiNER2 + GLiNKER + GLiREL  | Deploy GLiNER2 bi-encoder for zero-shot NER; GLiNKER for entity linking; GLiREL for relationship extraction | Given unstructured Slack messages, system extracts entities, links them to known graph entities, and extracts relationships with >0.65 F1 on held-out test set |

### Week 11-12: Memory and learning

| Task                               | Details                                                                                                            | Acceptance criteria                                                                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Observation layer (Subsystem 1)    | Event hooks on agent execution and web UI; capture what_worked/what_didn't/what's_missing signals                  | Observation log captures >95% of user interactions with relevant metadata                                                                                                   |
| Memory consolidation (Subsystem 2) | GAAMA three-step: verbatim preservation → atomic fact extraction → reflection synthesis; Celery scheduled task     | Weekly consolidation produces semantic memories from episodic data; consolidated facts validated against existing graph; contradictions trigger belief revision placeholder |
| Ebbinghaus decay                   | Query-time strength computation: S(t) = S₀ × e^(-t/τ); configurable half-life per entity type                      | Old, un-accessed entities score lower in retrieval results; frequently accessed entities maintain high strength                                                             |
| Adaptive query routing             | DSPy-trained classifier: simple factual → vector search, relationship → graph traversal, multi-hop → full pipeline | Router correctly classifies 10 test queries of varying complexity; cheap queries bypass expensive retrieval                                                                 |

### Week 13-14: Agent orchestration

| Task                    | Details                                                                                      | Acceptance criteria                                                                                     |
| ----------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| LangGraph orchestration | Supervisor + Monitor + Research agents; ReAct execution pattern; checkpointing and streaming | Multi-turn conversation with graph-grounded responses; supervisor correctly delegates to Research agent |
| MCP gateway             | Centralized MCP proxy; tool allowlisting; credential scoping; audit logging                  | All MCP tool calls flow through gateway; unauthorized tools rejected; full audit trail                  |
| Prompt caching          | Enable Anthropic/OpenAI prompt caching on all system prompts                                 | >50% cache hit rate on repeated query patterns; cost reduction visible in Langfuse traces               |
| Langfuse observability  | Self-hosted Langfuse; trace all LLM calls, agent steps, retrieval results                    | Every agent interaction has a complete trace; latency and cost per query visible in dashboard           |

### Week 15-16: Web UI and open-source launch

| Task                     | Details                                                                                                            | Acceptance criteria                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Next.js web UI           | Chat interface (streaming responses), settings dashboard (connector management, BYOM config), basic entity browser | User can chat, configure connectors, and browse extracted entities via web UI |
| Permission-aware queries | Query results filtered by authenticated user's source permissions                                                  | User without Slack access sees no Slack-derived entities in results           |
| Open-source launch prep  | CONTRIBUTING.md, Code of Conduct, issue templates, PR template, AGPL-3.0 license headers on all files              | Repository passes automated license check; all contribution docs present      |
| GitHub release           | v0.1.0 tag; Docker images on GHCR; announcement blog post on gnovi.ai                                              | `docker compose up` with published images works for external users            |

**Phase 2 exit criteria:** 5-person team uses Gnovi with GitHub + Slack + Jira connected, asking daily knowledge queries, for 2 weeks without critical bugs.

---

## Phase 3 — Learning and community (Weeks 17-24)

**Goal:** System that learns and improves. Growing open-source community. Graph explorer UI.

| Week  | Key deliverables                                                                                                                                                          |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17-18 | Pattern mining service (Subsystem 3); Kumiho belief revision (basic: contradiction detection + SUPERSEDES edges); graph explorer UI (React Flow) with community detection |
| 19-20 | SwiftMem DAG-Tag indexing; Relink dynamic evidence construction for incomplete KG; Level 0-1 graduated autonomy with Trinity control plane                                |
| 21-22 | Action agent (gated writes via MCP); engineering intelligence pack formalization; MemRL Q-learning bootstrap                                                              |
| 23-24 | HN/Reddit launch; Discord community setup; docs.gnovi.ai; target 2,000+ stars; bug fixes and stability                                                                    |

**Phase 3 exit criteria:** 500+ GitHub stars; 3+ external contributors; SwiftMem delivers sub-15ms retrieval on 10K+ memory items; belief revision correctly handles 10 test contradiction scenarios.

---

## Phase 4 — Monetization (Weeks 25-32)

| Week  | Key deliverables                                                                                                                             |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 25-26 | Managed cloud on Hetzner (Coolify for deployment); Stripe billing; Team tier (\$15/user/mo); user onboarding flow                            |
| 27-28 | Proactive intelligence with flow-state-aware notifications; knowledge crystallization (Slack → KB articles); CIRAG multi-hop evidence chains |
| 29-30 | AutoRefine dual-form expertise extraction; DSPy/GEPA automated prompt optimization (ACE loop); personal ↔ organizational graph separation    |
| 31-32 | PagerDuty/incident integration; CI/CD pipeline ingestion; command palette UI (⌘+K); target 50+ free cloud users, 10+ paying                  |

**Phase 4 exit criteria:** \$2-5K MRR; managed cloud runs 30 days without downtime; knowledge crystallization produces 10+ auto-drafted KB articles from real Slack conversations.

---

## Phase 5 — Scale and expand (Months 9-18)

| Quarter | Key deliverables                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Q3      | MAGMA multi-graph decomposition; SSO/SAML/RBAC for Business tier; product management intelligence pack; ambient notification layer                      |
| Q4      | Enterprise tier; SOC 2 Type I prep; "create your own intelligence pack" capability; code KG layer (tree-sitter AST + CodeGraph); Kubernetes Helm charts |
| Q5-Q6   | Additional intelligence packs (DevOps/SRE, sales, consulting); emergent entity discovery (Level 3); A2A protocol readiness; seed fundraising evaluation |

**Phase 5 exit criteria:** \$30-50K MRR; 10K+ free users; 100+ paying accounts; SOC 2 Type I in progress; 2+ non-engineering intelligence packs shipped.

---

## Dependency graph

```
Phase 1: KG Engine + GitHub → Phase 2: Multi-connector + UI
                                          ↓
Phase 3: Learning + Community → Phase 4: Cloud + Revenue
                                          ↓
                                Phase 5: Scale + Enterprise
```

**Critical path items (any delay here delays everything):**

1. FalkorDB + Graphiti integration (Phase 1, Week 5) — all memory and retrieval depends on this
2. Entity extraction quality (Phase 1, Week 3-4) — everything downstream is only as good as extraction
3. Entity resolution accuracy (Phase 1, Week 4) — false merges corrupt the entire graph
4. Permission-aware traversal (Phase 2, Week 15) — blocks any multi-user deployment
5. Managed cloud infrastructure (Phase 4, Week 25) — blocks revenue

---

_This roadmap assumes solo founder working full-time with Claude Code for implementation acceleration. Timeline compresses with additional contributors or extends with part-time effort._
