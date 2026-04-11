# Gnovi: innovation opportunities reference

> **Status:** Reference document — opportunities catalog from April 2026 research sweep  
> **Origin:** Derived from the "87 Opportunities Across Nine Technical Dimensions" audit, updated to reflect current Gnovi architecture decisions  
> **Note:** The Gnovi Founding Blueprint incorporates the highest-priority items. This document preserves the full opportunity catalog for backlog planning and contributor reference.

---

## How to use this document

Each opportunity below was identified during a sweep of 200+ papers, tools, and frameworks from 2025-2026. Items marked **[INCORPORATED]** are already part of the Gnovi blueprint or companion documents. Items marked **[BACKLOG]** remain valid but are deferred. Items marked **[SUPERSEDED]** have been replaced by better approaches. The "solo founder priority actions" from the original audit have been superseded by the POC Validation Plan and Implementation Roadmap.

---

## Area 1: Knowledge graph construction

- **[INCORPORATED]** GLiNER2 bi-encoder upgrade (130× throughput at 1000+ entity types)
- **[INCORPORATED]** GLiNKER for cross-source entity linking
- **[INCORPORATED]** AutoSchemaKG-inspired schema-free discovery
- **[INCORPORATED]** ATOM atomic fact decomposition as pre-processor
- **[INCORPORATED]** LLM-based triple validation before graph insertion
- **[INCORPORATED]** KG completion via SAT Framework (8.7-29.8% link prediction improvement)
- **[BACKLOG]** GNN embeddings (Node2Vec/FastRP) for graph-structure-aware entity embeddings — evaluate in Phase 5
- **[BACKLOG]** Full KG completion with LLM-based reranking — defer to post-MVP

## Area 2: Memory architecture

- **[INCORPORATED]** MAGMA multi-graph decomposition (semantic/temporal/causal/entity)
- **[INCORPORATED]** Kumiho formal belief revision with prospective indexing
- **[INCORPORATED]** GAAMA three-step consolidation
- **[INCORPORATED]** SimpleMem compression as pre-processor (30× token savings)
- **[INCORPORATED]** User-scoped memory from day one
- **[INCORPORATED]** Trust-level tags per memory source
- **[BACKLOG]** Hindsight as potential fallback if custom memory stack proves too complex — evaluate if LoCoMo scores are below 60%
- **[BACKLOG]** SYNAPSE spreading activation as alternative multi-hop retrieval — evaluate against MAGMA's Adaptive Traversal Policy
- **[BACKLOG]** ALMA meta-agent for learned memory architecture search — post-seed research direction
- **[BACKLOG]** Memory-R1 structured memory operations (ADD/UPDATE/DELETE/NOOP with 152 training pairs)
- **[BACKLOG]** EverMemOS Foresight signals — partially captured by Kumiho's prospective indexing

## Area 3: Agent orchestration and optimization

- **[INCORPORATED]** LangGraph as orchestration framework
- **[INCORPORATED]** DSPy/MIPROv2 for automated prompt optimization (~\$2/run)
- **[INCORPORATED]** Prompt caching (90% cost reduction)
- **[INCORPORATED]** Model tiering (90% cost reduction)
- **[INCORPORATED]** Langfuse for observability
- **[INCORPORATED]** Trinity deterministic control plane
- **[INCORPORATED]** Reflexion loop for critical outputs
- **[BACKLOG]** A2A protocol integration — Phase 5 when protocol matures
- **[BACKLOG]** VeriGuard formal verification via Nagini/Viper — Enterprise tier differentiator
- **[BACKLOG]** ShieldAgent probabilistic rule circuits — evaluate for compliance-heavy verticals
- **[BACKLOG]** AutoAgent/Meta-Harness self-optimizing harness — research direction, not production-ready
- **[BACKLOG]** Constitutional AI (C3AI framework) — 15 positively-framed principles + RLAIF

## Area 4: Retrieval architecture

- **[INCORPORATED]** LazyGraphRAG for global synthesis
- **[INCORPORATED]** Adaptive query routing with complexity classifier
- **[INCORPORATED]** CodeXEmbed + Qwen3-Embedding dual embeddings
- **[INCORPORATED]** Relink for dynamic evidence construction
- **[INCORPORATED]** CIRAG for multi-hop evidence chains
- **[INCORPORATED]** HyPE hypothetical prompt embeddings at indexing time
- **[BACKLOG]** HippoRAG 2 — natural upgrade when multi-hop quality needs improvement
- **[BACKLOG]** CAR (HDBSCAN clustering for dynamic document count) — ~60% token savings
- **[BACKLOG]** AIR-RAG retrieval-LLM alignment optimization

## Area 5: Security and compliance

- **[INCORPORATED]** Provenance metadata on every graph edge
- **[INCORPORATED]** Three-layer prompt injection defense (Balaji et al.)
- **[INCORPORATED]** PII separation with pseudonymous IDs
- **[INCORPORATED]** promptfoo in CI/CD for automated red teaming
- **[INCORPORATED]** MCP security hardening (tool allowlisting, credential scoping, audit logging)
- **[INCORPORATED]** RTBF cascade-aware deletion
- **[BACKLOG]** Confidential computing (TEEs) — Enterprise tier
- **[BACKLOG]** Differential privacy for KG aggregations — Enterprise tier
- **[BACKLOG]** Federated KG across organizational boundaries — post-seed

## Area 6: Proactive intelligence

- **[INCORPORATED]** ProAgentBench dual-task framework (timing + content)
- **[INCORPORATED]** 4-tier notification queue (immediate → breakpoint → digest → store)
- **[INCORPORATED]** Flow state detection heuristics
- **[INCORPORATED]** Absorption model (answer questions FOR the developer, don't interrupt them)
- **[BACKLOG]** RASP for temporal pattern mining (342% accuracy margin improvement) — Phase 4
- **[BACKLOG]** TSpan for temporal compactness in sequential pattern mining — Phase 4
- **[BACKLOG]** Granger causality for time-series causal testing — Phase 5
- **[BACKLOG]** Counterfactual reasoning over KGs (CFKGR) — Phase 5+

## Area 7: Code knowledge graph (engineering intelligence pack)

- **[INCORPORATED]** Tree-sitter AST parsing for deterministic code graph
- **[INCORPORATED]** FalkorDB CodeGraph integration
- **[INCORPORATED]** KGCompass repository-aware KG for bug localization
- **[INCORPORATED]** Code-Craft hierarchical summarization
- **[BACKLOG]** ToM-SWE developer mental model encoding — evaluate for personalized code explanations
- **[BACKLOG]** Architecture decision mining from Slack/email conversations — Phase 4
- **[BACKLOG]** Technical debt scoring via graph analysis (complexity × change frequency × authors) — Phase 5
- **[BACKLOG]** CI/CD pipeline event ingestion via CDEvents standard — Phase 4
- **[BACKLOG]** "Who should be paged" intelligence from KG — Phase 4

## Area 8: Self-improvement

- **[INCORPORATED]** ACE Generator-Reflector-Curator loop
- **[INCORPORATED]** DSPy/GEPA automated prompt evolution
- **[INCORPORATED]** MemRL non-parametric Q-learning
- **[INCORPORATED]** AutoRefine dual-form expertise extraction
- **[BACKLOG]** Experience replay of successful trajectories — Phase 4
- **[BACKLOG]** Absolute Zero Reasoner self-play for self-generated training — research direction
- **[BACKLOG]** SICA-style code self-editing — research direction, safety concerns

## Area 9: Unconventional ideas

- **[INCORPORATED]** Knowledge crystallization (Slack/PR → KB articles)
- **[INCORPORATED]** Flow state preservation with absorption model
- **[INCORPORATED]** Cognitive load theory as design principle (progressive disclosure, 4-5 item limit)
- **[BACKLOG]** Neurosymbolic fusion (neural perception + symbolic reasoning) — natural fit with KG architecture
- **[BACKLOG]** Organizational world model / digital twin framing — compelling for fundraising, build incrementally
- **[BACKLOG]** SHACL-like constraint validation for neurosymbolic approach — Phase 3

---

## The 15 highest-priority actions (original audit ranking)

These have been reorganized into the Implementation Roadmap and POC Validation Plan. Retained here for historical reference:

1. ✅ Prompt caching on all LLM calls
2. ✅ Langfuse observability
3. ✅ Provenance metadata on graph edges
4. ✅ PII separation schema design
5. ✅ promptfoo CI/CD integration
6. ✅ GLiNKER cross-source entity linking
7. ✅ LLM-based triple validation
8. ✅ SimpleMem compression pre-processor
9. ✅ Adaptive query routing
10. ✅ CodeXEmbed + Qwen3-Embedding dual embeddings
11. ✅ DSPy/GEPA integration
12. ✅ Agentic verify-and-re-retrieve loop
13. ✅ Code knowledge graph via tree-sitter
14. ✅ Flow-aware notification system
15. ✅ Passive knowledge crystallization

All 15 are incorporated into the Gnovi blueprint and roadmap.

---

_This document serves as a living backlog. As Gnovi matures, [BACKLOG] items should be periodically re-evaluated for promotion to active development based on user demand, competitive pressure, and technical feasibility._
