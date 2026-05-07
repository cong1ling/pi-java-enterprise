# Usage Guide

`pi-java-enterprise` works best when you treat its resources as three different entry points:

- Use a `skill` when you want Pi to follow a Java-specific workflow
- Use a `prompt` when you want a fast shortcut into a common task
- Use an extension command when you want lightweight project-aware hints or quick triage

## Start Here

If you already know the task type:

- Pick a `skill` first for structured work such as API design, debugging, review, or SQL analysis
- Add a `prompt` when you want a faster starting instruction for the same task
- Use a slash command when you need a small helper instead of a full workflow

If the problem is still unclear:

- Start with `java-debugging`
- Paste the failing command, stack trace, or error output
- Use one of the helper commands if the failure matches Maven tests, Spring Boot startup, or SQL analysis

## How To Choose The Right Resource

### Skills

Skills are the main workflow layer in this package. Use them when you want Pi to reason inside a Java backend task rather than answer generically.

Recommended skills:

- `springboot-api-development`
- `java-code-review`
- `java-debugging`
- `java-testing`
- `java-refactoring`
- `mybatis-plus-crud`
- `mysql-performance-troubleshooting`
- `redis-cache-design`
- `kafka-event-handling`
- `springboot-configuration-troubleshooting`
- `terminology-guide`

### Prompt templates

Prompt templates are best when you want a quick task kickoff and already know what you need.

Recommended prompts:

- `api-feature`
- `java-review`
- `bugfix-root-cause`
- `junit-test-generation`
- `sql-optimization`
- `springboot-module-design`
- `cache-strategy`
- `kafka-consumer-analysis`

### Extension commands

Extension commands are small, fast helpers. They do not replace skills, but they are useful for triage and command discovery.

Included commands:

- `/java-workflow-help`
- `/maven-test-help <pasted failure output>`
- `/springboot-context-help <exception chain>`
- `/mysql-query-hint`

## Scenario Workflows

### API development

Use this when you are adding or changing a Spring Boot endpoint.

- Start with `springboot-api-development`
- Use `api-feature` if you want a fast prompt-based kickoff
- Add `mybatis-plus-crud` when the task is CRUD-heavy or mapper-centric
- Use `/java-workflow-help` if you need common Maven or Spring Boot commands for the current project

Recommended flow:

1. Describe the endpoint, request/response shape, validation rules, and persistence impact
2. Ask Pi to implement or review the controller, service, mapper, and test shape
3. Use `java-testing` or `junit-test-generation` if test coverage is still missing

### Java code review

Use this when reviewing a backend diff, pull request, or pasted Java change.

- Start with `java-code-review`
- Use `java-review` for a faster review prompt
- Add `terminology-guide` if the review needs bilingual wording consistency

Focus areas to ask for:

- correctness and regressions
- Spring bean lifecycle and wiring risks
- transaction boundaries
- SQL or cache side effects
- missing tests

### Test failure triage

Use this when Maven or JUnit output is already failing.

- Start with `java-debugging`
- Use `bugfix-root-cause`
- Use `/maven-test-help <pasted failure output>` for quick classification
- Add `/springboot-context-help <exception chain>` if the failure is really a startup or bean wiring issue

Recommended flow:

1. Paste the failing Maven command and the relevant stack trace
2. Run `/maven-test-help` on the failure output
3. If the error points to Spring context startup, run `/springboot-context-help`
4. Ask Pi to isolate the root cause, likely fix, and missing test coverage

### Spring Boot startup troubleshooting

Use this when the application fails before the business flow even starts.

- Start with `springboot-configuration-troubleshooting`
- Add `java-debugging` when the trace is messy or mixed with test output
- Use `/springboot-context-help <exception chain>` for quick hinting

Useful inputs:

- full nested exception chain
- active profiles
- relevant datasource, Redis, Kafka, or config changes
- whether the failure happens in app runtime or test runtime

### SQL performance analysis

Use this when a query is slow, unstable, or suspicious.

- Start with `mysql-performance-troubleshooting`
- Use `sql-optimization`
- Use `/mysql-query-hint` before sharing EXPLAIN output
- Add `mybatis-plus-crud` if the issue is tied to wrapper design or generated SQL

Bring these inputs:

- actual SQL text
- table schema and indexes
- EXPLAIN output
- expected row count and filter pattern

### Cache and Kafka design

Use this when designing consistency, invalidation, event flow, or consumer behavior.

- Use `redis-cache-design` for cache keys, TTL, invalidation, and read/write trade-offs
- Use `kafka-event-handling` for producer/consumer behavior, retries, and event design
- Use `cache-strategy` or `kafka-consumer-analysis` when you want a prompt-driven starting point

## Command Discovery

If you forgot which helper commands are available, start from the problem type:

- Need common Maven and Spring Boot commands: `/java-workflow-help`
- Need quick Maven/JUnit failure classification: `/maven-test-help`
- Need Spring Boot startup hints from an exception chain: `/springboot-context-help`
- Need a checklist before SQL or EXPLAIN analysis: `/mysql-query-hint`

These commands are intentionally lightweight. Use them to narrow the problem, then switch to a skill for deeper work.

## Suggested Daily Workflow

For a normal Java backend workday, this package works well in this order:

1. Use `springboot-api-development` or `java-code-review` for the main task
2. Use a prompt template if you need a faster entry into a repeated task
3. Use helper commands only when you want quick hints, triage, or command discovery
4. Switch to `java-debugging` when the task stops being straightforward
5. Use `java-testing` before finishing changes that still lack test confidence

## Related Docs

- `docs/package-overview.en.md`
- `docs/skills-index.en.md`
- `docs/prompts-index.md`
- `examples/usage.md`
