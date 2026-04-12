# SPDX-License-Identifier: AGPL-3.0-only
# Copyright (c) 2026 Gnovi Contributors

FROM node:25-slim AS base
RUN npm install -g pnpm@10.33.0 --ignore-scripts
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json apps/web/
COPY packages/ui/package.json packages/ui/
COPY packages/tsconfig/package.json packages/tsconfig/
RUN pnpm install --frozen-lockfile

# Dev stage
FROM deps AS dev
COPY packages/ packages/
COPY apps/web/ apps/web/
CMD ["pnpm", "--filter", "@gnovi/web", "dev"]

# Build stage
FROM deps AS builder
COPY packages/ packages/
COPY apps/web/ apps/web/
RUN pnpm --filter @gnovi/web build

# Prod stage — standalone Next.js output
FROM node:25-slim AS prod
RUN addgroup --system app && adduser --system --ingroup app app

COPY --from=builder --chown=app:app /app/apps/web/.next/standalone ./
COPY --from=builder --chown=app:app /app/apps/web/.next/static ./.next/static
COPY --from=builder --chown=app:app /app/apps/web/public ./public

USER app
EXPOSE 3000
ENV PORT=3000 HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
