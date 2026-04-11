# SPDX-License-Identifier: AGPL-3.0-only
# Copyright (c) 2026 Gnovi Contributors

# Build stage — install dependencies with uv
FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim AS build

ENV UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy

WORKDIR /app

# Install dependencies (cached layer — changes only when lock/pyproject files change)
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    --mount=type=bind,source=apps/api/pyproject.toml,target=apps/api/pyproject.toml \
    --mount=type=bind,source=libs/core/pyproject.toml,target=libs/core/pyproject.toml \
    --mount=type=bind,source=libs/db/pyproject.toml,target=libs/db/pyproject.toml \
    uv sync --frozen --no-install-project --no-dev --package gnovi-api

# Copy source and install project
COPY libs/core/src/ libs/core/src/
COPY libs/db/src/ libs/db/src/
COPY apps/api/src/ apps/api/src/
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    --mount=type=bind,source=apps/api/pyproject.toml,target=apps/api/pyproject.toml \
    --mount=type=bind,source=libs/core/pyproject.toml,target=libs/core/pyproject.toml \
    --mount=type=bind,source=libs/db/pyproject.toml,target=libs/db/pyproject.toml \
    uv sync --frozen --no-dev --no-editable --package gnovi-api

# Dev stage — includes dev dependencies + hot reload
FROM build AS dev
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    --mount=type=bind,source=apps/api/pyproject.toml,target=apps/api/pyproject.toml \
    --mount=type=bind,source=libs/core/pyproject.toml,target=libs/core/pyproject.toml \
    --mount=type=bind,source=libs/db/pyproject.toml,target=libs/db/pyproject.toml \
    uv sync --frozen --package gnovi-api
CMD ["uv", "run", "uvicorn", "gnovi.api.main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]

# Prod stage — minimal runtime, non-root user
FROM python:3.13-slim-bookworm AS prod

RUN groupadd --system app && useradd --system --gid app app

COPY --from=build --chown=app:app /app /app

USER app
WORKDIR /app
ENV PATH="/app/.venv/bin:$PATH"
EXPOSE 8000

CMD ["uvicorn", "gnovi.api.main:app", "--host", "0.0.0.0", "--port", "8000"]
