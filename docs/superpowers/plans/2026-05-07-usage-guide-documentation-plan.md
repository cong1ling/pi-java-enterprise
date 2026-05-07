# Usage Guide Documentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add bilingual task-oriented usage guides and connect them from the current package documentation.

**Architecture:** Keep the current overview and index files as lightweight references, then introduce dedicated bilingual usage guides as the main task-based documentation entry point. Update README and example navigation so users can reach the new guides quickly.

**Tech Stack:** Markdown documentation, existing repository docs structure

---

### Task 1: Create the English usage guide

**Files:**
- Create: `docs/usage-guide.en.md`
- Reference: `docs/package-overview.en.md`
- Reference: `docs/skills-index.en.md`
- Reference: `docs/prompts-index.md`
- Reference: `examples/usage.md`

- [ ] **Step 1: Draft the guide structure**

Create sections for package purpose, choosing between skills/prompts/commands, scenario-based workflows, command discovery, daily workflow, and related docs.

- [ ] **Step 2: Fill scenario guidance with existing identifiers only**

Document the scenarios:
- API development
- Java code review
- test failure triage
- Spring Boot startup troubleshooting
- SQL performance analysis
- cache and Kafka design

Use only identifiers already present in repository docs.

- [ ] **Step 3: Review terminology consistency**

Confirm skill, prompt, and slash-command names match current documentation exactly.

### Task 2: Create the Chinese usage guide

**Files:**
- Create: `docs/usage-guide.zh-CN.md`
- Reference: `docs/usage-guide.en.md`
- Reference: `docs/package-overview.zh-CN.md`
- Reference: `docs/skills-index.zh-CN.md`
- Reference: `examples/usage.md`

- [ ] **Step 1: Mirror the English guide structure**

Use the same section order as the English guide so both documents stay aligned.

- [ ] **Step 2: Translate into practical Chinese technical wording**

Preserve identifiers exactly while translating explanatory prose into concise Chinese.

- [ ] **Step 3: Cross-check bilingual alignment**

Confirm both guides cover the same scenarios and navigation links.

### Task 3: Link the guides from top-level docs

**Files:**
- Modify: `README.md`
- Modify: `README.zh-CN.md`
- Modify: `examples/usage.md`

- [ ] **Step 1: Add usage-guide links to both README files**

Place the links in the Documentation section so they are easy to discover.

- [ ] **Step 2: Reframe `examples/usage.md` as a short navigation page**

Keep example-oriented content short and point readers to the detailed English and Chinese guides.

- [ ] **Step 3: Verify final navigation**

Read the changed files and confirm the path references are correct.
