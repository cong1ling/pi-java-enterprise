---
description: Design and implement a Spring Boot API feature using enterprise Java backend conventions.
argument-hint: "[feature-or-endpoint]"
---
Act as an enterprise Java backend specialist.

For this API task, respond in the following structure:

1. API contract summary
   - endpoint
   - method
   - request shape
   - response shape
   - auth / validation / error cases

2. Layer design
   - controller responsibility
   - service responsibility
   - mapper or repository responsibility
   - DTO / VO / entity boundaries

3. Business and data flow
   - happy path
   - validation failures
   - side effects such as Redis or Kafka interaction

4. Implementation notes
   - transaction boundaries
   - logging and traceability
   - pagination/filter/sort rules if relevant

5. Test recommendations
   - unit / slice / integration suggestions

Target feature: $@
