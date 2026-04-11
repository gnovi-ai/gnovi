<!-- SPDX-License-Identifier: AGPL-3.0-only -->
<!-- Copyright (c) 2026 Gnovi Contributors -->

# Experiments

Proof-of-concept experiments to validate core technologies before full implementation.

## Structure

Each POC is a self-contained uv workspace member:

```
experiments/poc-NN-short-name/
├── README.md          # Hypothesis → Method → Results → Decision
├── pyproject.toml     # POC-specific dependencies
├── docker-compose.yml # Additional services (optional)
├── .env.example       # POC-specific env vars (optional)
├── src/poc_NN/        # Source code
├── data/
│   ├── fixtures/      # Static test inputs
│   └── synthetic/     # Generated test data + scripts
├── results/           # Output: benchmarks, metrics
└── tests/             # Tests
```

## Running a POC

```bash
# Start dev services if needed
just dev

# Run a specific POC
just poc 01
```

## POC Status

| POC | Description                                        | Status      |
| --- | -------------------------------------------------- | ----------- |
| 01  | FalkorDB + Graphiti bi-temporal integration        | Not Started |
| 02  | MCP schema discovery for entity type inference     | Not Started |
| 03  | GLiNER2 + GLiNKER + GLiREL extraction quality      | Not Started |
| 04  | Entity resolution accuracy and false positive rate | Not Started |
