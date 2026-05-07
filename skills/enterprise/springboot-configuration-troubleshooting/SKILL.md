---
name: springboot-configuration-troubleshooting
description: Troubleshoot Spring Boot configuration, profile, bean, and auto-configuration issues.
---

# Spring Boot Configuration Troubleshooting

Use this skill when a Spring Boot service fails to start, wires the wrong beans, loads the wrong configuration, or behaves differently across environments.

## Rules

- Start with active profiles and effective property sources.
- Prefer the full nested exception chain over top-level error summaries.
- Distinguish configuration absence from configuration mismatch.
- Be explicit about environment-specific assumptions.

## Workflow

1. **Classify the issue**
   - startup failure
   - missing bean
   - ambiguous bean
   - wrong config value loaded
   - environment-specific behavior difference
   - datasource/connection configuration problem

2. **Collect configuration evidence**
   - active profiles
   - `application.yml` / `application.properties`
   - profile-specific override files
   - env vars and startup flags
   - secret/config injection path

3. **Collect bean wiring evidence**
   - package scan roots
   - `@Configuration` / `@ComponentScan`
   - conditional annotations
   - bean names and qualifiers
   - constructor injection chain

4. **Identify the real mismatch**
   - missing config key
   - wrong profile activated
   - bean excluded by condition
   - duplicate candidate beans
   - missing dependency in local/test environment

5. **Propose the minimal fix**
   - property correction
   - profile correction
   - qualifier/primary adjustment
   - scan-path fix
   - test configuration fix

6. **Define verification**
   - startup command to rerun
   - profile to test
   - bean or datasource path to validate
   - regression scenario for another environment

## Output format

1. Observed startup/configuration issue
2. Active profile and config-source analysis
3. Bean/config mismatch
4. Minimal fix
5. Verification steps
6. Residual environment risk

## Common reminders

Pay special attention to:
- `BeanCreationException`
- `NoSuchBeanDefinitionException`
- `UnsatisfiedDependencyException`
- datasource configuration failures
- profile-specific differences between local, test, and production
