# POC-02: MCP Schema Discovery for Automatic Entity Type Inference

**Status:** Not Started

## Hypothesis

Gnovi can automatically discover entity types and their field structures from MCP server `tools/list` and `resources/list` responses without any manual configuration.

## Method

1. Connect to GitHub, Slack, and Jira MCP servers
2. Call `tools/list` on each; parse `inputSchema` and `outputSchema` for every tool
3. Build a Schema Discovery Agent (LLM-based) that analyzes tool names, descriptions, and schemas to propose entity types
4. Compare proposed entity types against manually-defined ground truth for each source
5. Measure precision (proposed types that are real) and recall (real types that were proposed)

## Acceptance Criteria

- [ ] Schema Discovery Agent correctly identifies >80% of expected entity types per source
- [ ] <10% false positive rate
- [ ] Process completes in <60 seconds per MCP server
- [ ] Works without any source-specific code

## Results

_Filled in after running the experiment._

## Decision

Pass → proceed with MCP schema discovery as the primary connector pattern.
Fail → implement a thin adapter layer per MCP server type.

## Residual Risk

Some MCP servers may have poor tool descriptions or non-standard schemas.
