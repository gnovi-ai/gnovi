<!-- SPDX-License-Identifier: AGPL-3.0-only -->
<!-- Copyright (c) 2026 Gnovi Contributors -->

# Gnovi

[![CI - Python](https://github.com/gnovi-ai/gnovi/actions/workflows/ci-python.yml/badge.svg)](https://github.com/gnovi-ai/gnovi/actions/workflows/ci-python.yml)
[![CI - Frontend](https://github.com/gnovi-ai/gnovi/actions/workflows/ci-frontend.yml/badge.svg)](https://github.com/gnovi-ai/gnovi/actions/workflows/ci-frontend.yml)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

**Open-source knowledge intelligence platform.** Gnovi builds a living, self-discovering knowledge graph from your organization's workplace tools, learns from every interaction, and progressively automates knowledge work through graduated autonomy.

## Key Features

- **Knowledge graph as core** — understands relationships between people, decisions, code, and systems through graph traversal and multi-hop reasoning
- **Self-discovering schema** — discovers the ontology of your organization from your data; no pre-configured entity types required
- **Compounding memory** — gets measurably smarter over time through five independent learning subsystems
- **Bring Your Own Model** — works with any LLM provider via LiteLLM; self-hostable with open-weight models
- **Open source and self-hostable** — AGPL-3.0 licensed, runs in Docker containers on modest hardware

## Quickstart

```bash
git clone https://github.com/gnovi-ai/gnovi.git
cd gnovi
docker compose -f infra/docker-compose.yml up
```

Then open [http://localhost:3000](http://localhost:3000).

## Development

```bash
# Prerequisites: Python 3.13+, Node.js 24+, uv, pnpm, just, Docker

# First-time setup
just setup

# Start dev services (databases)
just dev

# Run all checks
just check
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full development guide.

## Architecture

```
Web UI (Next.js) → API (FastAPI) → Agent Orchestration (LangGraph)
                                  → Retrieval Engine (vector + graph + BM25)
                                  → Memory Architecture (Graphiti + MAGMA)
                                  → Knowledge Graph Engine (FalkorDB)
                                  → Data Ingestion (MCP Connectors)

Databases: PostgreSQL 18 + pgvector | FalkorDB | Redis
```

## Documentation

Full documentation is available at **[docs.gnovi.ai](https://docs.gnovi.ai)**.

- [Getting Started](https://docs.gnovi.ai/docs/getting-started/quickstart)
- [Architecture Overview](https://docs.gnovi.ai/docs/architecture/overview)
- [Blog](https://docs.gnovi.ai/blog)

## Community

- [Discord](https://discord.gg/DnJZaAk7RX) — real-time chat, support, and community discussion
- [GitHub Discussions](https://github.com/gnovi-ai/gnovi/discussions) — questions, feature requests, and long-form discussion

## License

Gnovi is licensed under the [GNU Affero General Public License v3.0](LICENSE).

Copyright (c) 2026 Gnovi Contributors
