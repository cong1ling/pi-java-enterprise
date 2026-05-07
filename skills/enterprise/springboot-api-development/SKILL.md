---
name: springboot-api-development
description: Guide day-to-day Spring Boot API development for enterprise Java backend projects.
---

# Spring Boot API Development

Use this skill when implementing or changing HTTP APIs in Spring Boot services.

## Workflow

1. **Clarify the contract first**
   - endpoint path and HTTP method
   - request parameters, body, headers, and auth requirements
   - response shape and error cases
   - pagination, sorting, filtering, and idempotency expectations

2. **Map the request to layered responsibilities**
   - Controller: request parsing, validation, response mapping
   - Service: business rules, orchestration, transaction boundary decisions
   - Mapper/Repository: persistence-only concerns
   - DTO/VO: API-facing shapes
   - Entity/DO: persistence-facing shapes

3. **Validate at the edge**
   - prefer bean validation for request objects
   - reject invalid requests before entering business logic
   - make required/optional fields explicit

4. **Keep the controller thin**
   - no business branching in the controller
   - no direct SQL or persistence logic
   - no hidden cross-layer data shaping unless required by project conventions

5. **Implement service logic explicitly**
   - state the business rule in plain language first
   - separate read flow from write flow
   - call out side effects such as cache refresh, message production, or audit logging

6. **Keep persistence focused**
   - mapper methods should describe persistence intent clearly
   - avoid leaking business policy into query wrappers and mapper helpers
   - for complex queries, explain whether MyBatis-Plus wrappers are enough or custom SQL is justified

7. **Define error handling and observability**
   - expected business exceptions
   - validation failures
   - downstream dependency failures
   - key logs and trace fields needed for diagnosis

8. **Recommend verification**
   - unit tests for key business branches
   - slice or integration tests for request mapping and persistence-sensitive paths
   - manual verification steps for important edge cases

## Output format

When helping with an API task, structure the response like this:

1. API contract summary
2. Layer design
3. Data flow
4. Validation and error handling
5. Implementation notes
6. Test recommendations

## Default concerns

- request validation
- response consistency
- exception handling
- logging and traceability
- pagination and filtering behavior
- compatibility with existing project conventions
- transaction boundary clarity
- side-effect awareness for Redis/Kafka integration
