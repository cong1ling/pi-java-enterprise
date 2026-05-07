---
name: java-code-review
description: Review Java backend code for layering, correctness, maintainability, and operational safety.
---

# Java Code Review

Use this skill when reviewing Java backend code changes, generated code, or manually written feature work.

## Review priorities

1. **Correctness first**
   - obvious logic bugs
   - missing validation
   - unsafe null handling
   - broken transaction assumptions
   - incorrect exception mapping

2. **Layering and boundaries**
   - controller/service/mapper responsibilities
   - DTO/VO/entity separation
   - hidden persistence logic in service helpers or controllers
   - overly coupled cross-module calls

3. **Maintainability**
   - naming and readability
   - duplicated business logic
   - large methods with mixed responsibilities
   - magic values and unclear branching

4. **Operational safety**
   - logging quality and missing observability
   - concurrency/shared-state risks
   - retry/idempotency gaps
   - cache/message side-effect hazards
   - performance hotspots in SQL or loops

## Output format

Always structure the review as:

1. Blocking issues
2. Recommended improvements
3. Optional improvements

For each item, include:
- what is wrong
- why it matters
- the likely impact
- the smallest useful improvement

## What to avoid

- generic style commentary without impact
- subjective formatting-only nits unless they hide real risk
- recommending broad refactors unrelated to the current change

When reviewing business code, prefer concrete examples over generic advice.
