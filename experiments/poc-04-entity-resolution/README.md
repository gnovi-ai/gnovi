# POC-04: Entity Resolution Accuracy and False Positive Rate

**Status:** Not Started

## Hypothesis

The embedding-based entity resolution pipeline correctly merges cross-source entities with <5% false positive merge rate.

## Method

1. Create test dataset of 500 entities across 3 sources with known ground truth
2. Run Phase 1 (deterministic anchoring via email/URL matching)
3. Run Phase 2 (embedding similarity with S-MiniLM + FAISS)
4. Vary auto-merge threshold from 0.75 to 0.95
5. Measure precision, recall, F1 at each threshold

## Acceptance Criteria

- [ ] False positive merge rate < 5% at chosen threshold
- [ ] True positive merge rate > 70%
- [ ] Processing time < 30 seconds for 500 entities

## Results

_Filled in after running the experiment._

## Decision

Pass → proceed with embedding-based entity resolution.
Fail → add mandatory LLM confirmation step for merges scoring 0.60-0.90.

## Residual Risk

Short, generic entity names may have higher false positive rates.
