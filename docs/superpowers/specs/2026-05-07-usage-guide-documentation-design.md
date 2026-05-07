# Usage Guide Documentation Design

**Goal:** Improve package usability by adding task-oriented documentation that explains how to choose and use bundled skills, prompts, and extension commands in real Java backend workflows.

## Context

The repository already includes:

- overview documents in English and Chinese
- skill and prompt indexes
- short usage examples in `examples/usage.md`
- README-level package guidance

What is missing is a primary "how to use this package" document. Current docs list resources, but they do not give users a decision path for selecting the right skill, prompt, or extension command for a specific task.

## Scope

This documentation improvement covers:

- a new English usage guide
- a new Chinese usage guide
- README links to the new guides
- an update to `examples/usage.md` so it becomes a short navigation page rather than the main usage document

This change does not cover:

- changes to skills, prompts, extensions, or themes
- new commands
- package metadata or release behavior

## Approaches Considered

### 1. Expand existing index and example files only

This keeps file count small, but continues to spread usage guidance across multiple shallow documents. Users still need to assemble their own workflow.

### 2. Add dedicated bilingual usage guides and keep existing files as indexes

This creates a clear primary entry point for usage guidance while preserving existing indexes for reference. This is the recommended approach because it matches the repository's bilingual documentation style and fixes the main discoverability gap directly.

### 3. Focus only on extension command reference

This improves slash-command discoverability, but leaves the broader package story incomplete because skills and prompts remain disconnected from task-based guidance.

## Recommended Design

Add two new documents:

- `docs/usage-guide.en.md`
- `docs/usage-guide.zh-CN.md`

These guides should be organized by user intent rather than resource type. Each guide should explain:

- when to use a skill vs prompt vs extension command
- recommended combinations for common backend tasks
- what to do first when the problem is unclear
- how to discover commands and pick the right entry point quickly

## Proposed Structure

Each usage guide should include:

1. Purpose of the package
2. How to choose between skills, prompts, and extension commands
3. Recommended workflow by scenario:
   - API development
   - Java code review
   - test failure triage
   - Spring Boot startup troubleshooting
   - SQL performance analysis
   - cache and Kafka design
4. Command discovery section for included slash commands
5. Suggested daily workflow for Java backend projects
6. Cross-links to the overview, indexes, and examples

## File Changes

- Create `docs/usage-guide.en.md`
- Create `docs/usage-guide.zh-CN.md`
- Modify `README.md`
- Modify `README.zh-CN.md`
- Modify `examples/usage.md`

## Content Rules

- Keep the guide practical and task-oriented
- Reuse existing package terminology
- Preserve command and skill identifiers exactly
- Keep English and Chinese guides structurally aligned
- Avoid inventing capabilities not present in the package

## Validation

Validation for this documentation task is manual:

- confirm both usage guides exist
- confirm README files link to them
- confirm `examples/usage.md` points readers to the detailed guides
- confirm identifiers for skills, prompts, and commands match existing docs

## Risks

- English and Chinese docs may drift if one gets extra detail
- task-oriented prose may accidentally imply features the package does not actually ship

These risks are mitigated by aligning both guides to the same section structure and cross-checking identifiers against existing indexes and examples.
