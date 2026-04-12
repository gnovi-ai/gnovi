<!-- SPDX-License-Identifier: AGPL-3.0-only -->
<!-- Copyright (c) 2026 Gnovi Contributors -->

# Contributing to Gnovi

Thank you for your interest in contributing to Gnovi! This guide will help you get started.

## Development Setup

### Prerequisites

- Python 3.13+
- Node.js 24+ (LTS)
- [uv](https://docs.astral.sh/uv/) — Python package manager
- [pnpm](https://pnpm.io/) — Node.js package manager
- [just](https://just.systems/) — task runner
- [Docker](https://www.docker.com/) — container runtime

### Getting Started

```bash
git clone https://github.com/gnovi-ai/gnovi.git
cd gnovi
just setup    # installs dependencies + pre-commit hooks
just dev      # starts database services (Postgres, FalkorDB, Redis)
just check    # runs lint + typecheck + tests
```

## Code Style

### Python

- **Linter/formatter:** ruff (configured in root `pyproject.toml`)
- **Type checker:** pyright in strict mode
- **Conventions:** See `AGENTS.md` for full list

### TypeScript

- **Linter:** ESLint
- **Formatter:** Prettier
- **Strict mode** always enabled

## Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add entity extraction for Slack messages
fix: resolve false positive merges in entity resolution
docs: update quickstart guide
refactor: simplify retrieval pipeline routing
test: add property-based tests for pattern registry
chore: update Docker base images
```

Pre-commit hooks enforce this format automatically.

## Pull Request Process

1. Branch from `main`
2. Write tests for your changes
3. Run `just check` to verify everything passes
4. Open a PR with a clear description of what and why
5. All CI checks must pass

## Contributor License Agreement

We require a CLA for all contributions. When you open your first PR, the CLA Assistant bot will guide you through the process. This is a one-time step.

## Reporting Issues

Please use our [issue templates](https://github.com/gnovi-ai/gnovi/issues/new/choose):

- **Bug Report** — for bugs and unexpected behavior
- **Feature Request** — for new features and enhancements

## Getting Help

- [Discord](https://discord.gg/DnJZaAk7RX) — real-time chat, quick questions, community support
- [GitHub Discussions](https://github.com/gnovi-ai/gnovi/discussions) — questions, ideas, feature requests, general discussion

## License

By contributing to Gnovi, you agree that your contributions will be licensed under the AGPL-3.0 license.
