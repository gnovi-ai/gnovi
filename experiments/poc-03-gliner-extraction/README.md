# POC-03: GLiNER2 + GLiNKER + GLiREL Extraction Quality

**Status:** Not Started

## Hypothesis

The GLiNER2 bi-encoder extracts meaningful entities from real workplace text with dynamically-specified entity types, and GLiNKER and GLiREL correctly link and relate them.

## Method

1. Collect 200 real workplace text samples — anonymized
2. Manually annotate entities and relationships as ground truth
3. Run GLiNER2 with workplace-relevant entity types
4. Run GLiNKER to link entities against a synthetic knowledge graph
5. Run GLiREL to extract relationships
6. Measure precision, recall, F1

## Acceptance Criteria

- [ ] Entity extraction: >0.60 F1
- [ ] Entity linking: >0.70 accuracy on unambiguous entities
- [ ] Relationship extraction: >0.50 F1
- [ ] Latency: <500ms per sample on CPU

## Results

_Filled in after running the experiment._

## Decision

Pass → proceed with GLiNER2 as Tier 3 extraction.
Fail → increase LLM extraction coverage to 15-20%.

## Residual Risk

Workplace text has many implicit relationships that may be challenging.
