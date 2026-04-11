#!/usr/bin/env bash
# SPDX-License-Identifier: AGPL-3.0-only
# Copyright (c) 2026 Gnovi Contributors

set -euo pipefail

echo "=== Gnovi Development Setup ==="

echo "Installing Python dependencies..."
uv sync

echo "Installing Node.js dependencies..."
pnpm install

echo "Installing pre-commit hooks..."
uv run pre-commit install

echo "=== Setup complete! Run 'just dev' to start. ==="
