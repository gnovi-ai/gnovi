# Gnovi: algorithm and technology reference — documentation plan

> **Parent:** [Gnovi Founding Blueprint](./gnovi-founding-blueprint.md)  
> **Version:** 1.0 · **Date:** April 9, 2026

---

## Purpose

This document maps out every algorithm, technology, and research-derived approach used in Gnovi that warrants a dedicated deep-dive reference document. Each entry describes: what the document should cover, the source research, the implementation relevance, and suggested benchmarks/tests. These reference documents serve as both internal engineering guides and open-source community resources.

**Execution plan:** Each reference document should follow a standard template (below) and be created incrementally — Priority 1 documents first (during Phase 1), Priority 2 during Phase 2-3, Priority 3 during Phase 4+.

---

## Standard template for algorithm reference documents

```markdown
# [Algorithm/Technology Name]

## What it is

Brief description in plain language. What problem does it solve?

## Source research

Paper title, authors, date, arXiv ID, key claims, benchmark results.

## How it works

Technical explanation of the algorithm/approach with pseudocode or diagrams.
Include mathematical formulations where relevant.

## How Gnovi uses it

Specific integration point in Gnovi's architecture.
What it replaces or improves over the baseline approach.

## Implementation guide

Language-specific implementation details (Python).
Dependencies, configuration, and deployment considerations.
Code structure and module location within the Gnovi monorepo.

## Testing and validation

How to verify the implementation is correct.
Specific benchmarks to reproduce from the source paper.
Gnovi-specific acceptance criteria and KPIs.
Regression tests to prevent quality degradation.

## Known limitations and failure modes

Where the algorithm breaks down.
Edge cases specific to Gnovi's domain.
Mitigation strategies.

## Alternatives considered

What else was evaluated and why this approach was chosen.

## References

Full bibliography with links.
```

---

## Priority 1 — Required for Phase 1 (create during weeks 1-8)

### 1.1 Graphiti temporal knowledge graph

- **Source:** Zep/Graphiti paper (arXiv 2501.13956, January 2025)
- **Covers:** Bi-temporal edge model, episode → entity → community subgraph architecture, hybrid retrieval (semantic + BM25 + graph traversal), FalkorDB backend configuration, incremental update mechanism
- **Gnovi integration:** Core temporal memory substrate
- **Benchmarks:** DMR accuracy (target: >90%), P95 query latency, ingestion throughput

### 1.2 GLiNER2 bi-encoder zero-shot NER

- **Source:** GLiNER2 paper (arXiv 2602.18487, February 2026)
- **Covers:** Bi-encoder architecture (vs uni-encoder), dynamic label specification, span extraction mechanism, label caching for throughput optimization, batch processing strategy
- **Gnovi integration:** Tier 3 entity extraction
- **Benchmarks:** Micro-F1 on CrossNER zero-shot, latency per sample on CPU, throughput at various label counts

### 1.3 GLiNKER entity linking

- **Source:** GLiNKER documentation and related papers
- **Covers:** Entity disambiguation against existing graph entities, coreference resolution, nil detection for new entities, contextual matching approach
- **Gnovi integration:** Cross-source entity linking within Tier 3
- **Benchmarks:** Linking accuracy on workplace entity test set, nil detection rate

### 1.4 GLiREL relationship extraction

- **Source:** GLiREL documentation and related papers
- **Covers:** Open-label relationship classification, integration with GLiNER entity spans, confidence scoring per relationship
- **Gnovi integration:** Tier 3 relationship extraction
- **Benchmarks:** Relationship F1 on workplace text test set

### 1.5 Entity resolution with Splink/embedding similarity

- **Source:** Splink (Fellegi-Sunter model), AnyMatch (arXiv 2409.04073), ALER (arXiv 2601.20664)
- **Covers:** Probabilistic record linkage model, S-MiniLM embedding generation, FAISS/HNSW blocking strategy, active learning bootstrap, threshold calibration, false positive analysis
- **Gnovi integration:** Cross-source entity merging (Phase 2-4 of ER pipeline)
- **Benchmarks:** Precision/recall at various thresholds, false positive rate, processing time

### 1.6 Reciprocal Rank Fusion (RRF) for hybrid retrieval

- **Source:** RRF paper (Cormack et al., 2009) + modern adaptations
- **Covers:** Score combination formula, parameter k tuning, merging results from vector/graph/BM25 retrieval paths
- **Gnovi integration:** Core retrieval fusion
- **Benchmarks:** Retrieval precision@5/10, comparison vs individual retrieval paths

### 1.7 FalkorDB GraphBLAS operations

- **Source:** FalkorDB documentation, GraphBLAS specification
- **Covers:** Sparse matrix algebra for graph operations, Cypher query optimization, named graph multi-tenancy, GraphRAG SDK ontology detection, CodeGraph module
- **Gnovi integration:** Primary graph database
- **Benchmarks:** P99 query latency, ingestion throughput, memory usage per tenant

---

## Priority 2 — Required for Phase 2-3 (create during weeks 9-24)

### 2.1 AutoSchemaKG domain-agnostic schema induction

- **Source:** AutoSchemaKG (arXiv 2505.23628, May 2025)
- **Covers:** Four-phase pipeline (input → extraction → induction → construction), LLM conceptualization for type induction, schema alignment metrics (BertScore), scaling characteristics
- **Gnovi integration:** Level 2 schema discovery, intelligence pack auto-generation
- **Benchmarks:** Semantic alignment with human-crafted schemas (target: >85%)

### 2.2 DIAL-KG incremental schema evolution

- **Source:** DIAL-KG (arXiv 2603.20059, March 2026)
- **Covers:** Meta-Knowledge Base architecture, dual-track extraction, governance adjudication, evolution-intent assessment, soft deprecation, schema versioning
- **Gnovi integration:** Continuous schema governance
- **Benchmarks:** F1 improvement over schema-free baselines, schema compactness (relation type count), deprecation precision

### 2.3 GAAMA three-step memory consolidation

- **Source:** GAAMA (arXiv 2603.27910, March 2026)
- **Covers:** Verbatim preservation → atomic fact extraction → higher-order reflection; clustering by shared entities; validation against existing knowledge
- **Gnovi integration:** Learning Subsystem 2
- **Benchmarks:** Fact extraction accuracy, consolidation throughput, semantic memory quality

### 2.4 SwiftMem DAG-Tag indexing

- **Source:** SwiftMem (arXiv 2601.08160, January 2026)
- **Covers:** DAG-Tag hierarchy construction, Query-Tag Router mechanism, temporal index, co-consolidation, sub-linear retrieval complexity analysis
- **Gnovi integration:** Primary memory indexing layer
- **Benchmarks:** 47× speedup reproduction, sub-15ms P95 latency, recall vs exhaustive search

### 2.5 Kumiho formal belief revision

- **Source:** Kumiho (arXiv 2603.17244, March 2026)
- **Covers:** AGM postulates implementation, minimal change principle, core-retainment, SUPERSEDES edge mechanics, prospective indexing, Dream State consolidation
- **Gnovi integration:** Contradiction handling, forward-looking implications
- **Benchmarks:** LoCoMo-Plus accuracy (target: >85%), contradiction resolution correctness

### 2.6 Relink dynamic evidence construction

- **Source:** Relink (arXiv 2601.07192, January 2026)
- **Covers:** Latent relation pool concept, unified evaluation scoring, distractor filtering, reason-and-construct paradigm
- **Gnovi integration:** Incomplete KG path repair at query time
- **Benchmarks:** EM improvement over static GraphRAG, distractor filtering accuracy

### 2.7 CIRAG multi-hop evidence chains

- **Source:** CIRAG (arXiv 2601.06799, January 2026)
- **Covers:** Iterative Construction-Integration retrieval, multi-chain preservation, cascaded multi-granularity generation (triples → sentences → documents), provenance mapping
- **Gnovi integration:** Complex cross-source queries
- **Benchmarks:** F1/EM improvement, percentage of queries resolved at triple granularity

### 2.8 Trinity deterministic control plane

- **Source:** Trinity (arXiv 2602.09947, February 2026)
- **Covers:** Trusted Computing Base architecture, Finite Action Calculus, information-flow control tags, policy definition language, action validation in constant time
- **Gnovi integration:** Graduated autonomy enforcement
- **Benchmarks:** 100% unauthorized action blocking, 0% false rejection rate, <1ms evaluation latency

### 2.9 LangGraph agent orchestration patterns

- **Source:** LangGraph documentation, LangChain ecosystem
- **Covers:** Graph-based state machine, supervisor/worker topology, checkpointing/persistence, streaming, human-in-the-loop gates, ReAct vs Plan-and-Execute patterns
- **Gnovi integration:** Agent orchestration framework
- **Benchmarks:** Multi-turn conversation coherence, task completion rate

---

## Priority 3 — Required for Phase 4-5 (create during months 6-18)

### 3.1 MAGMA multi-graph memory decomposition

- **Source:** MAGMA (arXiv 2601.03236, January 2026)
- **Covers:** Four orthogonal graph views (semantic, temporal, causal, entity), Adaptive Traversal Policy, intent-aware routing, dual-stream ingestion (fast path / slow path)
- **Gnovi integration:** Advanced memory architecture (typed edges in FalkorDB)
- **Benchmarks:** 45.5% reasoning accuracy improvement, 95% token reduction

### 3.2 MemRL non-parametric Q-learning for memory

- **Source:** MemRL (arXiv 2601.03192, January 2026)
- **Covers:** Intent-Experience-Utility triplet structure, two-phase retrieval (similarity + Q-value), Bellman update rule, convergence proof, cross-model transferability
- **Gnovi integration:** Learning Subsystem 4 — continuous memory optimization
- **Benchmarks:** Q-value correlation (Pearson r > 0.8), cross-model transfer success

### 3.3 AutoRefine dual-form expertise extraction

- **Source:** AutoRefine (arXiv 2601.22758, January 2026)
- **Covers:** Subagent Patterns vs Skill Patterns classification, trajectory analysis, batch extraction, continuous maintenance (scoring, pruning, merging)
- **Gnovi integration:** Procedural memory, Learning Subsystem 3
- **Benchmarks:** Success rate on workflow automation tasks, step reduction percentage

### 3.4 DSPy/MIPROv2 automated prompt optimization

- **Source:** DSPy (Stanford NLP), MIPROv2, GEPA
- **Covers:** Programmatic prompt compilation, signature-based optimization, multi-stage pipeline optimization, cost per optimization run, quality improvement measurement
- **Gnovi integration:** Learning Subsystem 5 — ACE self-improvement loop
- **Benchmarks:** Quality improvement percentage, cost per run, convergence time

### 3.5 LazyGraphRAG deferred summarization

- **Source:** LazyGraphRAG (Microsoft, June 2025)
- **Covers:** NLP-based concept co-occurrence graph (no LLM at indexing), query-time LLM subquery generation, iterative relevance rating, cost comparison vs full GraphRAG
- **Gnovi integration:** Global synthesis queries
- **Benchmarks:** 0.1% of full GraphRAG indexing cost, quality vs competing methods

### 3.6 CompassMem event-centric memory

- **Source:** CompassMem (arXiv 2601.04726, January 2026)
- **Covers:** Event Segmentation Theory, Topic Layer + Event Layer hierarchy, 9 logical relation types between events, event graph navigation
- **Gnovi integration:** Engineering event reasoning (incidents, decisions, reviews)
- **Benchmarks:** F1 on LoCoMo (target: >50%), temporal question F1 (target: >55%)

### 3.7 Knowledge graph completion (SAT Framework)

- **Source:** SAT Framework, PyKEEN embedding library
- **Covers:** TransE/ComplEx/RotatE embeddings, link prediction for missing relationships, confidence scoring via sigmoid transformation
- **Gnovi integration:** Predicted relationship edges
- **Benchmarks:** Link prediction MRR improvement (target: 8-30%)

### 3.8 PMAx autonomous process mining

- **Source:** PMAx (arXiv 2603.15351, March 2026)
- **Covers:** Process discovery from agent execution traces, workflow pattern extraction, validation against outcomes
- **Gnovi integration:** Procedural memory discovery
- **Benchmarks:** Process discovery accuracy, pattern utility score

### 3.9 SHACL constraint validation

- **Source:** W3C SHACL specification, Trav-SHACL optimization
- **Covers:** Shape definitions for graph validation, cardinality/type/value constraints, pre-flight validation for schema changes, Trav-SHACL traversal optimization
- **Gnovi integration:** Schema drift prevention
- **Benchmarks:** Validation throughput, constraint violation detection accuracy

### 3.10 Ebbinghaus decay and memory forgetting

- **Source:** Ebbinghaus forgetting curve, cognitive science literature
- **Covers:** Exponential decay formula, query-time strength computation, configurable half-life per entity type, reinforcement on recall, interaction with MemRL Q-values
- **Gnovi integration:** Memory relevance scoring
- **Benchmarks:** Retrieval precision improvement with decay vs without

---

## Execution notes

- **Total documents:** 25 reference documents
- **Priority 1 (7 docs):** Create during Phase 1 weeks 1-8. These block implementation.
- **Priority 2 (9 docs):** Create during Phase 2-3 weeks 9-24. Can be written just-in-time before implementing the relevant component.
- **Priority 3 (9 docs):** Create during Phase 4-5 months 6-18. Community contributors can help author these.

- **Who writes them:** Initially the founder, using Claude Code to draft from source papers. As the community grows, algorithm reference documents become excellent "good first contribution" targets for researchers and engineers who want to contribute without touching core code.

- **Where they live:** `/docs/algorithms/` in the monorepo. Each document is a standalone markdown file named after the algorithm: `graphiti-temporal-kg.md`, `gliner2-zero-shot-ner.md`, `swiftmem-dag-tag-indexing.md`, etc.

- **Review process:** Each document is reviewed for technical accuracy against the source paper, implementation correctness against the codebase, and benchmark reproducibility. PR review required before merge.

---

_These reference documents transform Gnovi from "a system that uses research papers" into "a system that demonstrates, validates, and extends research papers" — a much stronger positioning for both open-source community credibility and enterprise trust._
