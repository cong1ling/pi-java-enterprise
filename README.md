# pi-java-enterprise

[中文说明](README.zh-CN.md)

A bilingual Pi package for enterprise Java backend development.

`pi-java-enterprise` is designed for teams and individual developers using Pi in Spring Boot-based backend projects. It focuses on practical workflows for API delivery, debugging, test design, SQL troubleshooting, and project-aware assistance.

## Default stack

- Spring Boot
- MyBatis-Plus
- MySQL
- Redis
- Kafka
- Maven
- JUnit 5

## What this package includes

### Skills

Java-focused skills for:
- Spring Boot API development
- Java debugging
- JUnit 5 / Spring test planning
- MyBatis-Plus CRUD design and review
- Java code review
- Java refactoring
- Redis cache design
- Kafka event handling
- MySQL performance troubleshooting
- Spring Boot configuration troubleshooting

### Prompt templates

Shortcut prompts for:
- API feature implementation
- Java code review
- Root-cause debugging
- JUnit test planning
- SQL optimization
- Spring Boot module design
- Cache strategy design
- Kafka consumer analysis

### Extensions

Lightweight helper extensions for:
- Java project detection
- Maven and Spring Boot workflow hints
- Maven test failure classification
- Spring Boot startup failure diagnosis
- MySQL query analysis checklists

### Themes

- `java-enterprise-dark`
- `java-enterprise-graphite` — recommended flagship dark theme with a JetBrains-like graphite style
- `java-enterprise-light`

## Install

### Install from npm

```bash
pi install npm:pi-java-enterprise
```

### Install from a local path

```bash
pi install /absolute/path/to/pi-java-enterprise
```

### Install into project settings

```bash
pi install -l /absolute/path/to/pi-java-enterprise
```

## Quickstart

1. Install the package
2. Open a Java backend project in Pi
3. Use the bundled skills and prompts for API work, debugging, SQL analysis, and test planning
4. Use helper commands from the included extensions when needed
5. Switch to `java-enterprise-graphite` in Pi settings if you want the recommended enterprise Java dark theme

## Example workflows

### Daily API development

- Use the `springboot-api-development` skill
- Use the `api-feature` prompt

### Test failure triage

- Use `java-debugging`
- Use `/maven-test-help <pasted failure output>`
- Use `/springboot-context-help <exception chain>` when startup wiring fails

### SQL troubleshooting

- Use `mysql-performance-troubleshooting`
- Use `sql-optimization`
- Use `/mysql-query-hint`

### Project workflow help

- Use `/java-workflow-help`

## Package layout

- `skills/`
- `prompts/`
- `extensions/`
- `themes/`
- `docs/`
- `examples/`

## Documentation

- `docs/usage-guide.en.md`
- `docs/usage-guide.zh-CN.md`
- `docs/package-overview.zh-CN.md`
- `docs/package-overview.en.md`
- `docs/skills-index.zh-CN.md`
- `docs/skills-index.en.md`
- `docs/prompts-index.md`
- `docs/roadmap.md`
- `docs/release.md`
- `examples/install.md`
- `examples/usage.md`

## Contributing

See `CONTRIBUTING.md` for contribution guidelines.

## Language support

This package ships with English and Chinese documentation.

## Versioning

The package starts at `0.1.x` while workflows, prompts, and extensions are still evolving. Expect iteration before `1.0.0`.

## License

MIT
