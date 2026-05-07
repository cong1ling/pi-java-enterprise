---
name: mybatis-plus-crud
description: Guide CRUD and query development with MyBatis-Plus in enterprise Java projects.
---

# MyBatis-Plus CRUD

Use this skill when designing or reviewing CRUD and query flows built on MyBatis-Plus.

## Rules

- Prefer framework capabilities before custom SQL.
- Define paging, sorting, and filter rules explicitly.
- Keep business logic out of mapper methods.
- Separate write rules from read projection concerns.
- Flag explain/index review for complex queries.

## Workflow

1. **Clarify the use case**
   - create, update, delete, get-by-id, list, page, export, batch operation
   - read-heavy or write-heavy path
   - strict consistency or eventual consistency expectations

2. **Choose the right MyBatis-Plus approach**
   - base mapper CRUD method
   - lambda query wrapper
   - lambda update wrapper
   - custom mapper method with XML or annotation SQL

3. **Design request and response boundaries**
   - distinguish entity, DTO, and VO responsibilities
   - avoid exposing persistence-only fields to API consumers
   - define sort fields and filter semantics explicitly

4. **Review query correctness and maintainability**
   - optional filter handling
   - null and empty-string semantics
   - page size and offset behavior
   - deterministic ordering for pagination

5. **Review performance risk**
   - whether wrappers generate an efficient query
   - whether joins or aggregations justify custom SQL
   - whether indexes support the filter and sort columns

6. **Review data integrity and update safety**
   - partial update semantics
   - optimistic lock/version handling if used
   - batch update impact
   - soft delete vs hard delete behavior

## Output format

1. CRUD/use-case summary
2. Recommended MyBatis-Plus approach
3. Query or update design notes
4. Performance concerns
5. Integrity and edge cases
6. Test recommendations

## When custom SQL is justified

Call it out explicitly when:

- the query needs joins, grouping, aggregation, or vendor-specific optimization
- wrapper-generated SQL becomes unclear or inefficient
- result mapping differs substantially from the base entity model
