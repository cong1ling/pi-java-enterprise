# Extension Quality Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve extension consistency, project detection accuracy, and package self-validation with minimal structural change.

**Architecture:** Extract small shared helpers for project detection and text normalization, then update existing extensions to consume them. Add a lightweight package validation script and expose it through package scripts.

**Tech Stack:** TypeScript extensions, Node.js fs/path APIs, package.json scripts

---

### Task 1: Shared helpers

**Files:**
- Create: `extensions/_shared/text.ts`
- Create: `extensions/_shared/project-detection.ts`

- [ ] Add text normalization helper for command input.
- [ ] Add targeted project detection helper with root-first checks and limited recursive scanning.

### Task 2: Extension integration

**Files:**
- Modify: `extensions/detect-java-project.ts`
- Modify: `extensions/java-workflow-helper.ts`
- Modify: `extensions/maven-test-helper.ts`
- Modify: `extensions/springboot-context-helper.ts`

- [ ] Replace duplicated detection logic with shared helper.
- [ ] Make workflow help consistent with nested Maven detection.
- [ ] Make exception/test classification matching case-insensitive via shared normalization.

### Task 3: Validation and package metadata

**Files:**
- Create: `scripts/validate-package.mjs`
- Modify: `package.json`

- [ ] Add lightweight package validation script for required paths, theme JSON, and skill frontmatter.
- [ ] Add package scripts and Node engine metadata.

### Task 4: Verify

**Files:**
- None

- [ ] Run the validation script.
- [ ] Review extension imports and output strings for consistency.
