# pi-java-enterprise

[English README](README.md)

面向企业级 Java 后端开发的 Pi 双语扩展包。

`pi-java-enterprise` 适用于在基于 Spring Boot 的后端项目中使用 Pi 的团队和个人开发者，聚焦 API 交付、问题排查、测试设计、SQL 故障分析以及面向项目上下文的辅助能力。

## 默认技术栈

- Spring Boot
- MyBatis-Plus
- MySQL
- Redis
- Kafka
- Maven
- JUnit 5

## 包含内容

### Skills

面向 Java 场景的技能，覆盖：
- Spring Boot API 开发
- Java 调试
- JUnit 5 / Spring 测试规划
- MyBatis-Plus CRUD 设计与评审
- Java 代码评审
- Java 重构
- Redis 缓存设计
- Kafka 事件处理
- MySQL 性能排查
- Spring Boot 配置故障排查

### Prompt 模板

用于以下场景的快捷提示词：
- API 功能实现
- Java 代码评审
- 根因调试
- JUnit 测试规划
- SQL 优化
- Spring Boot 模块设计
- 缓存策略设计
- Kafka 消费者分析

### Extensions

轻量辅助扩展，覆盖：
- Java 项目识别
- Maven 与 Spring Boot 工作流提示
- Maven 测试失败分类
- Spring Boot 启动失败诊断
- MySQL 查询分析检查清单

### Themes

- `java-enterprise-dark`
- `java-enterprise-graphite`：推荐的旗舰深色主题，接近 JetBrains 风格的石墨色调
- `java-enterprise-light`

## 安装

### 从 npm 安装

```bash
pi install npm:pi-java-enterprise
```

### 从本地路径安装

```bash
pi install /absolute/path/to/pi-java-enterprise
```

### 安装到项目级设置

```bash
pi install -l /absolute/path/to/pi-java-enterprise
```

## 快速开始

1. 安装该扩展包
2. 在 Pi 中打开一个 Java 后端项目
3. 使用随包提供的 skills 和 prompts 处理 API 开发、调试、SQL 分析和测试规划
4. 需要时使用扩展中提供的辅助命令
5. 如果希望使用推荐的企业 Java 深色主题，可在 Pi 设置中切换到 `java-enterprise-graphite`

## 示例工作流

### 日常 API 开发

- 使用 `springboot-api-development` skill
- 使用 `api-feature` prompt

### 测试失败排查

- 使用 `java-debugging`
- 使用 `/maven-test-help <粘贴的失败输出>`
- 当启动装配失败时，使用 `/springboot-context-help <异常链>`

### SQL 故障排查

- 使用 `mysql-performance-troubleshooting`
- 使用 `sql-optimization`
- 使用 `/mysql-query-hint`

### 项目工作流辅助

- 使用 `/java-workflow-help`

## 包结构

- `skills/`
- `prompts/`
- `extensions/`
- `themes/`
- `docs/`
- `examples/`

## 文档

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

## 参与贡献

贡献规范见 `CONTRIBUTING.md`。

## 语言支持

该扩展包同时提供英文和中文文档。

## 版本说明

当前包从 `0.1.x` 起步，在工作流、提示词和扩展能力仍持续演进的阶段，`1.0.0` 之前预计会继续迭代。

## 许可证

MIT
