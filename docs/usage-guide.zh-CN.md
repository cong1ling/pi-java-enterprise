# 使用指南

`pi-java-enterprise` 最适合按三类入口来使用：

- 需要 Pi 进入 Java 专项工作流时，用 `skill`
- 已经知道任务类型、想快速起手时，用 `prompt`
- 只需要轻量提示、命令建议或快速排查时，用扩展命令

## 从这里开始

如果你已经知道任务类型：

- 优先选 `skill`，用于 API 开发、调试、代码评审、SQL 分析这类结构化工作
- 需要更快起手时，再补一个 `prompt`
- 只想拿到小而快的提示时，用 slash 命令

如果问题还不明确：

- 先从 `java-debugging` 开始
- 贴出失败命令、堆栈或报错输出
- 如果问题明显属于 Maven 测试、Spring Boot 启动或 SQL 分析，再补对应辅助命令

## 如何选择合适的资源

### Skills

Skills 是这个包的主工作流层。需要 Pi 在 Java 后端语境里深入分析，而不是泛泛回答时，优先使用 skill。

推荐 skills：

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

### Prompt 模板

Prompt 模板适合“我已经知道要做什么，只想快速发起任务”的场景。

推荐 prompts：

- `api-feature`
- `java-review`
- `bugfix-root-cause`
- `junit-test-generation`
- `sql-optimization`
- `springboot-module-design`
- `cache-strategy`
- `kafka-consumer-analysis`

### 扩展命令

扩展命令是轻量辅助工具，不替代 skill，但非常适合做快速分类、提示和命令发现。

内置命令：

- `/java-workflow-help`
- `/maven-test-help <粘贴的失败输出>`
- `/springboot-context-help <异常链>`
- `/mysql-query-hint`

## 场景化工作流

### API 开发

适用于新增或修改 Spring Boot 接口。

- 从 `springboot-api-development` 开始
- 如果想快速用提示词起手，使用 `api-feature`
- 如果任务以 CRUD、Mapper 或查询封装为主，再补 `mybatis-plus-crud`
- 如果你需要当前项目常见的 Maven / Spring Boot 命令，使用 `/java-workflow-help`

推荐流程：

1. 说明接口用途、请求与响应结构、校验规则以及持久化影响
2. 让 Pi 协助实现或评审 controller、service、mapper 和测试结构
3. 如果测试覆盖还不够，再使用 `java-testing` 或 `junit-test-generation`

### Java 代码评审

适用于评审后端 diff、PR 或粘贴出来的 Java 代码改动。

- 从 `java-code-review` 开始
- 想更快进入评审上下文时，用 `java-review`
- 如果评审里涉及双语术语一致性，再补 `terminology-guide`

建议关注：

- 正确性与行为回归
- Spring Bean 生命周期与装配风险
- 事务边界
- SQL 或缓存副作用
- 缺失的测试

### 测试失败排查

适用于 Maven 或 JUnit 已经失败的情况。

- 从 `java-debugging` 开始
- 使用 `bugfix-root-cause`
- 用 `/maven-test-help <粘贴的失败输出>` 做快速分类
- 如果本质上是启动失败或 Bean 装配问题，再用 `/springboot-context-help <异常链>`

推荐流程：

1. 贴出失败的 Maven 命令和关键堆栈
2. 先对失败输出运行 `/maven-test-help`
3. 如果定位到 Spring 上下文启动问题，再运行 `/springboot-context-help`
4. 让 Pi 继续收敛根因、修复方向和缺失测试

### Spring Boot 启动故障排查

适用于应用还没进入业务流程就启动失败的情况。

- 从 `springboot-configuration-troubleshooting` 开始
- 如果堆栈很乱，或者和测试输出混在一起，再补 `java-debugging`
- 用 `/springboot-context-help <异常链>` 先拿一轮快速提示

建议提供：

- 完整的嵌套异常链
- 当前激活的 profile
- 相关的 datasource、Redis、Kafka 或配置变更
- 问题发生在应用运行时还是测试运行时

### SQL 性能分析

适用于慢查询、结果不稳或可疑 SQL 的分析。

- 从 `mysql-performance-troubleshooting` 开始
- 使用 `sql-optimization`
- 在贴 EXPLAIN 之前，先用 `/mysql-query-hint`
- 如果问题与 Wrapper 设计或生成 SQL 有关，再补 `mybatis-plus-crud`

建议一并提供：

- 实际 SQL 文本
- 表结构与索引
- EXPLAIN 输出
- 预期行数与过滤模式

### 缓存与 Kafka 设计

适用于设计缓存一致性、失效策略、事件流和消费者行为。

- 用 `redis-cache-design` 分析 key 设计、TTL、失效策略以及读写取舍
- 用 `kafka-event-handling` 分析生产者/消费者行为、重试和事件设计
- 想用 prompt 快速起手时，可用 `cache-strategy` 或 `kafka-consumer-analysis`

## 命令发现

如果你一时忘了有哪些辅助命令，可以按问题类型来选：

- 需要当前项目常见 Maven / Spring Boot 命令：`/java-workflow-help`
- 需要快速分类 Maven / JUnit 失败：`/maven-test-help`
- 需要根据异常链看 Spring Boot 启动问题：`/springboot-context-help`
- 需要 SQL / EXPLAIN 分析前的检查清单：`/mysql-query-hint`

这些命令都故意保持轻量。它们适合快速缩小问题范围，真正深入分析时还是应切回对应 skill。

## 建议的日常使用顺序

对于普通的 Java 后端工作日，可以按这个顺序使用：

1. 用 `springboot-api-development` 或 `java-code-review` 处理主任务
2. 需要更快进入重复性任务时，补一个 prompt 模板
3. 只在需要快速提示、分类或命令发现时使用辅助命令
4. 一旦任务不再直观，就切到 `java-debugging`
5. 在改动即将结束但测试信心不足时，使用 `java-testing`

## 相关文档

- `docs/package-overview.zh-CN.md`
- `docs/skills-index.zh-CN.md`
- `docs/prompts-index.md`
- `examples/usage.md`
