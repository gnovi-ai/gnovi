---
sidebar_position: 1
---

# Architecture Overview

Gnovi is a knowledge-graph-native intelligence platform with a seven-layer architecture.

## System Layers

1. **Data Ingestion** — MCP connectors pull data from workplace tools
2. **Knowledge Graph Engine** — FalkorDB stores entities and relationships with self-discovering schema
3. **Memory Architecture** — Graphiti temporal memory with consolidation and forgetting
4. **Retrieval Engine** — Hybrid search (vector + graph + BM25) with adaptive routing
5. **Agent Orchestration** — LangGraph agents with graduated autonomy
6. **API Layer** — FastAPI with authentication and rate limiting
7. **Web UI** — Next.js chat interface, graph explorer, and settings

## Technology Stack

| Component              | Technology                       |
| ---------------------- | -------------------------------- |
| Backend                | Python 3.13+, FastAPI            |
| Frontend               | Next.js 16, React 19, TypeScript |
| Knowledge Graph        | FalkorDB                         |
| Relational + Vector DB | PostgreSQL 18 + pgvector         |
| Cache / Queue          | Redis                            |
| Task Queue             | Celery                           |
| LLM Gateway            | LiteLLM (BYOM)                   |
