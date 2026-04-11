# Gnovi

Open-source knowledge intelligence platform. Knowledge-graph-native system that builds
a living, self-discovering knowledge graph from workplace tools.

## Architecture

7-layer architecture: Data Ingestion → Knowledge Graph Engine → Memory →
Retrieval Engine → Agent Orchestration → API Layer → Web UI

Databases: PostgreSQL 18 + pgvector (relational + vector), FalkorDB (knowledge graph),
Redis 7 (working memory + task queue)

## Directory Structure

- `apps/api/` — FastAPI backend (Python, uv workspace member)
- `apps/worker/` — Celery background worker (Python, uv workspace member)
- `apps/web/` — Next.js 16 frontend (TypeScript, pnpm workspace member)
- `libs/core/` — Shared domain logic, types (Python, uv workspace member)
- `libs/db/` — Database models, migrations (Python, uv workspace member)
- `packages/ui/` — Shared React components (TypeScript, pnpm workspace member)
- `packages/tsconfig/` — Shared TypeScript configs
- `experiments/` — POC experiments (each is a uv workspace member)
- `infra/` — Docker Compose files, deployment scripts
- `docs/` — Docusaurus documentation site

## Python Conventions

- Python 3.13+
- NEVER use `datetime.utcnow()` — ALWAYS use `datetime.now(UTC)`
- NEVER use inline imports — ALWAYS group them at the top of the file
- Always fix type checker or linter errors even if not directly caused by your changes
- All async code (FastAPI is async-first)
- Pydantic v2 models for all data structures
- src/ layout with gnovi.\* namespace packages
- Type annotations on all public functions
- SPDX license header on all new files

## TypeScript Conventions

- Strict mode always
- React Server Components (Next.js App Router)
- Tailwind CSS for styling
- No `any` types — use `unknown` and narrow

## Testing

- Python: pytest + pytest-asyncio + hypothesis (property-based)
- TypeScript: Vitest
- Tests live in `tests/` directory within each package
- Integration tests use Docker Compose test services

## Running Things

- `just dev` — start development environment
- `just lint` — run all linters
- `just fmt` — format all code
- `just test` — run all tests
- `just typecheck` — type check all code
- `just check` — full CI check locally
- `just poc <name>` — run a specific POC

## Commits

Use conventional commits: feat:, fix:, docs:, refactor:, test:, chore:

## Key Dependencies (deliberate choices — don't suggest alternatives)

- FastAPI (not Django, Flask) — async-native, Pydantic validation, OpenAPI
- FalkorDB (not Neo4j) — 496x faster, Apache 2.0, Graphiti-compatible
- Graphiti (not LangGraph memory) — bi-temporal model, FalkorDB backend
- LangGraph (not CrewAI, AutoGen) — graph-based state machine, largest ecosystem
- uv (not poetry, pip) — fast, workspace support
- ruff (not flake8+black+isort) — single tool, fast
- pnpm (not npm, yarn, bun) — strict, disk-efficient, proven monorepo support
