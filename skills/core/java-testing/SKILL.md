---
name: java-testing
description: Design JUnit 5, Mockito, and Spring Boot tests with clear scope and business assertions.
---

# Java Testing

Use this skill when adding or improving test coverage for Java backend code.

## First decide the test scope

Choose the smallest test type that gives confidence:

- **Unit test**: pure business logic, deterministic branching, mapper-independent rules
- **Slice test**: web layer, JSON binding, validation, repository slice, or focused Spring wiring
- **Integration test**: full flow involving framework wiring, database behavior, or real infrastructure contracts

## Rules

- Test business behavior, not private implementation details.
- Prefer explicit assertions over broad “no exception” checks.
- Avoid loading the full Spring context unless it validates something important.
- Mock only boundaries you truly do not want to exercise.
- Prioritize high-risk and high-value paths first.

## Workflow

1. **Identify the behavior under test**
   - happy path
   - validation failure
   - business rule rejection
   - persistence edge case
   - side effect such as cache/message interaction

2. **Choose the smallest useful test set**
   - one happy path
   - one representative negative path
   - one edge case only if it changes behavior meaningfully

3. **Define clear assertions**
   - returned data
   - thrown exception type/message if stable
   - state transition
   - persistence result
   - side-effect occurrence or non-occurrence

4. **Minimize setup noise**
   - build small fixtures
   - avoid giant object graphs unless necessary
   - use helper builders only when they improve readability

5. **Call out what should not be tested here**
   - framework internals
   - duplicate coverage from lower-cost tests
   - unstable implementation details

## Output format

1. Recommended test type
2. Behaviors to cover
3. Suggested test cases
4. Key assertions
5. Setup notes
6. Risks not covered by this test layer

## JUnit 5 / Spring guidance

- Prefer JUnit 5 naming that reads like behavior.
- Use Mockito for service-boundary isolation, not as the main subject of assertions.
- Use `@WebMvcTest` for request/response and validation-focused checks.
- Use `@DataJpaTest` or equivalent slice patterns where appropriate.
- Use full `@SpringBootTest` selectively for wiring-sensitive paths.
