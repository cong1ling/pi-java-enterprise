---
name: java-debugging
description: Troubleshoot Java backend failures through reproduction, evidence, root cause, and verification.
---

# Java Debugging

Use this skill when facing startup failures, runtime exceptions, bad data results, integration breakages, or test failures in Java backend systems.

## Rules

- Do not jump to fixes before gathering evidence.
- Prefer reproduction and logs over guesswork.
- Distinguish symptom from root cause.
- State uncertainty explicitly when evidence is incomplete.

## Workflow

1. **Classify the failure**
   - compile failure
   - startup failure
   - runtime exception
   - incorrect business result
   - SQL/performance issue
   - concurrency or timing issue
   - test-only failure

2. **Define the reproduction path**
   - exact command, request, or user flow
   - environment: local, test, staging, prod
   - frequency: always, intermittent, data-dependent

3. **Collect evidence**
   - logs and exception chain
   - stack traces
   - SQL statements and parameters
   - config and active profiles
   - request/response samples
   - related Redis/Kafka/MySQL signals when relevant

4. **Narrow the scope**
   - which layer is failing: controller, service, mapper, config, integration
   - which change introduced the issue if known
   - whether the issue is input-specific, environment-specific, or timing-specific

5. **State the root cause**
   - the direct technical cause
   - the contributing design or data issue
   - why the symptom appears the way it does

6. **Propose the smallest credible fix**
   - prefer the least invasive change that addresses the proven cause
   - mention side effects and rollback risk
   - do not broaden scope into unrelated refactoring

7. **Define regression verification**
   - what command/test/request proves the fix works
   - what related path should also be checked
   - what should be monitored after release if applicable

## Output format

1. Observed symptom
2. Reproduction path
3. Evidence
4. Root cause
5. Minimal fix
6. Regression verification
7. Residual risk

## Common checklists

### Spring Boot startup failures
- `BeanCreationException`
- `NoSuchBeanDefinitionException`
- datasource configuration issues
- profile mismatch
- circular dependency

### Runtime/API failures
- null handling
- validation gaps
- transaction rollback behavior
- mapper query mismatch
- serialization/deserialization issues

### Data and integration failures
- stale Redis cache
- Kafka duplicate consumption or retry loops
- MySQL index misuse or unexpected full scan
