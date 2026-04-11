# ADR-001: Monorepo with apps/libs/packages layout

**Status:** Accepted
**Date:** 2026-04-10

## Context

Gnovi is a mixed Python + TypeScript project. We need a monorepo structure that supports uv workspaces for Python and pnpm/Turborepo for TypeScript, with clear separation between deployable services and shared libraries.

## Decision

Use an apps/ + libs/ + packages/ layout:

- `apps/` — deployable services (api, worker, web)
- `libs/` — shared Python libraries (core, db) as uv workspace members
- `packages/` — shared TypeScript packages (ui, tsconfig) as pnpm workspace members

Python packages use `gnovi.*` namespace (PEP 420 implicit namespace packages).

## Consequences

- Clear mapping from directory to Docker service
- Language separation via libs (Python) vs packages (TypeScript)
- Each app can have independent CI triggers and Dockerfiles
- Namespace packages require no `__init__.py` in the `gnovi/` directories
