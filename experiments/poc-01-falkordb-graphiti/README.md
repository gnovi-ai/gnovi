# POC-01: FalkorDB + Graphiti Bi-Temporal Integration

**Status:** Not Started

## Hypothesis

Graphiti can run on FalkorDB (rather than Neo4j) with full bi-temporal edge support, and the resulting graph is queryable with sub-200ms latency for 10K+ edges.

## Method

1. Deploy FalkorDB v4.18+ via Docker (use `just dev` — FalkorDB is in the dev stack)
2. Configure Graphiti with FalkorDB backend (Graphiti officially supports FalkorDB as of v0.17)
3. Ingest 1,000 synthetic workplace events (messages, commits, tickets) with temporal metadata
4. Create entities with bi-temporal edges (4 timestamps each)
5. Execute point-in-time queries: "who owned service-X on date Y?"
6. Measure query latency, ingestion throughput, and memory usage

## Acceptance Criteria

- [ ] Graphiti successfully creates/queries bi-temporal edges on FalkorDB
- [ ] Point-in-time queries return correct results for 100% of test cases
- [ ] P95 query latency < 200ms for graph with 10K edges
- [ ] Ingestion throughput > 100 entities/second

## Results

_Filled in after running the experiment._

## Decision

Pass → proceed with FalkorDB + Graphiti as the temporal memory substrate.
Fail → switch to Neo4j Community Edition or Kuzu (experimental Graphiti support).

## Residual Risk

Complex temporal queries with many overlapping validity periods may degrade performance beyond the 10K edge benchmark.
