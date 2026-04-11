# SPDX-License-Identifier: AGPL-3.0-only
# Copyright (c) 2026 Gnovi Contributors

FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim AS build

ENV UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy

WORKDIR /app

RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    --mount=type=bind,source=apps/worker/pyproject.toml,target=apps/worker/pyproject.toml \
    --mount=type=bind,source=libs/core/pyproject.toml,target=libs/core/pyproject.toml \
    --mount=type=bind,source=libs/db/pyproject.toml,target=libs/db/pyproject.toml \
    uv sync --frozen --no-install-project --no-dev --package gnovi-worker

COPY libs/core/src/ libs/core/src/
COPY libs/db/src/ libs/db/src/
COPY apps/worker/src/ apps/worker/src/
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    --mount=type=bind,source=apps/worker/pyproject.toml,target=apps/worker/pyproject.toml \
    --mount=type=bind,source=libs/core/pyproject.toml,target=libs/core/pyproject.toml \
    --mount=type=bind,source=libs/db/pyproject.toml,target=libs/db/pyproject.toml \
    uv sync --frozen --no-dev --no-editable --package gnovi-worker

FROM build AS dev
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    --mount=type=bind,source=apps/worker/pyproject.toml,target=apps/worker/pyproject.toml \
    --mount=type=bind,source=libs/core/pyproject.toml,target=libs/core/pyproject.toml \
    --mount=type=bind,source=libs/db/pyproject.toml,target=libs/db/pyproject.toml \
    uv sync --frozen --package gnovi-worker
CMD ["uv", "run", "celery", "-A", "gnovi.worker", "worker", "--loglevel=info"]

FROM python:3.13-slim-bookworm AS prod

RUN groupadd --system app && useradd --system --gid app app

COPY --from=build --chown=app:app /app /app

USER app
WORKDIR /app
ENV PATH="/app/.venv/bin:$PATH"

CMD ["celery", "-A", "gnovi.worker", "worker", "--loglevel=info"]
