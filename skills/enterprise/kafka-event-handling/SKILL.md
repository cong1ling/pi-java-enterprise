---
name: kafka-event-handling
description: Design and troubleshoot Kafka producer and consumer workflows in enterprise Java services.
---

# Kafka Event Handling

Use this skill when designing, reviewing, or debugging Kafka-based event flows in enterprise Java systems.

## Rules

- Define the message contract before implementation details.
- Never assume strong consistency from messaging alone.
- Treat idempotency, retries, and observability as first-class concerns.
- Separate producer responsibilities from consumer responsibilities.

## Workflow

1. **Define the event goal**
   - domain event
   - integration event
   - async side effect
   - audit/analytics stream

2. **Define the message contract**
   - topic name
   - key strategy
   - payload schema
   - ordering expectations
   - versioning and backward compatibility

3. **Define producer behavior**
   - when the event is emitted
   - transaction/outbox considerations
   - retry and failure handling
   - duplicate-send risk

4. **Define consumer behavior**
   - business action on receipt
   - idempotency strategy
   - retry behavior
   - dead-letter or parking strategy
   - whether ordering must be preserved

5. **Review operational risks**
   - poison messages
   - retry storms
   - duplicate consumption
   - consumer lag
   - schema drift

6. **Define observability**
   - message counts
   - retry counts
   - DLQ activity
   - lag and throughput
   - trace correlation fields

## Output format

1. Event-flow summary
2. Message contract
3. Producer design notes
4. Consumer design notes
5. Failure handling
6. Observability
7. Verification and rollout notes

## Common reminders

- State ordering assumptions explicitly.
- Call out idempotency keys or deduplication boundaries.
- If business correctness depends on exact-once assumptions, challenge the design.
