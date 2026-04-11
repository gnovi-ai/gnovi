# Gnovi task runner
# Run `just --list` to see all available recipes

set dotenv-load := false

# --- Development ---

# Start dev environment (databases + cache)
dev:
    docker compose -f infra/docker-compose.dev.yml up -d

# Stop dev environment
dev-down:
    docker compose -f infra/docker-compose.dev.yml down

# Stop dev environment, remove volumes, restart fresh
dev-reset:
    docker compose -f infra/docker-compose.dev.yml down -v
    docker compose -f infra/docker-compose.dev.yml up -d

# --- Quality ---

# Run all linters
lint:
    uv run ruff check .
    pnpm turbo lint

# Format all code
fmt:
    uv run ruff format .
    pnpm format

# Run type checkers
typecheck:
    uv run pyright
    pnpm turbo typecheck

# Run all tests
test:
    uv run pytest
    pnpm turbo test

# Run Python tests only
test-py:
    uv run pytest

# Run TypeScript tests only
test-ts:
    pnpm turbo test

# Full CI check locally (lint + typecheck + test)
check:
    just lint
    just typecheck
    just test

# --- Build ---

# Build all Docker images
build:
    docker compose -f infra/docker-compose.yml build

# Build Docusaurus docs site
build-docs:
    pnpm --filter docs build

# --- Database ---

# Run Alembic migrations
db-migrate:
    uv run alembic -c libs/db/alembic.ini upgrade head

# Seed database with sample data
db-seed:
    bash infra/scripts/seed.sh

# Drop and recreate database
db-reset:
    docker compose -f infra/docker-compose.dev.yml down -v postgres
    docker compose -f infra/docker-compose.dev.yml up -d postgres

# --- Experiments ---

# Run a specific POC experiment (e.g., just poc 01)
poc name:
    cd experiments/poc-{{name}}-*/ && uv run python -m poc_{{name}}.run

# --- Utilities ---

# Remove build artifacts, caches, __pycache__
clean:
    find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
    find . -type d -name .pytest_cache -exec rm -rf {} + 2>/dev/null || true
    find . -type d -name .ruff_cache -exec rm -rf {} + 2>/dev/null || true
    rm -rf .turbo/
    rm -rf apps/web/.next/

# First-time dev environment setup
setup:
    bash infra/scripts/setup.sh
