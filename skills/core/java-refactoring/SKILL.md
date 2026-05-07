---
name: java-refactoring
description: Guide safe, incremental refactoring in Java backend projects.
---

# Java Refactoring

Use this skill when improving structure without intentionally changing business behavior.

## Rules

- Identify behavior boundaries before edits.
- Prefer small, reversible changes.
- Call out impact scope before splitting services or DTO/VO structures.
- Recommend tests before risky changes.
- Preserve external contracts unless the user explicitly requests change.

## Workflow

1. **State the refactoring target**
   - duplication
   - large method or class
   - mixed responsibilities
   - poor naming
   - hidden side effects
   - difficult testability

2. **Define what must not change**
   - API contract
   - persistence behavior
   - transaction semantics
   - emitted events
   - cache behavior

3. **Pick the smallest refactoring unit**
   - extract method
   - extract helper/service
   - separate mapper logic
   - introduce DTO/VO conversion boundary
   - rename for clarity

4. **Assess risk**
   - what callers are affected
   - what tests are missing
   - what hidden coupling exists

5. **Sequence the change**
   - add or identify tests
   - make one structural change at a time
   - keep intermediate states readable and buildable

## Output format

1. Refactoring goal
2. Behavior that must remain stable
3. Proposed small-step sequence
4. Risks and safeguards
5. Suggested verification

Prefer extracting smaller methods, reducing duplication, and clarifying data flow over broad rewrites.
