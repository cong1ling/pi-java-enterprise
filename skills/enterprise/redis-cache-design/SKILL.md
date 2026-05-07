---
name: redis-cache-design
description: Design Redis caching strategy with clear keys, TTL, invalidation, and consistency trade-offs.
---

# Redis Cache Design

Use this skill when deciding whether to cache, how to cache, or how to debug cache-related behavior in Java backend systems.

## Rules

- Do not add cache by default; justify it.
- Make cache keys, TTL, and invalidation explicit.
- State consistency trade-offs clearly.
- Separate read optimization concerns from write correctness concerns.

## Workflow

1. **Confirm the goal**
   - reduce read latency
   - reduce database pressure
   - smooth traffic spikes
   - reuse expensive computed results

2. **Decide whether cache is needed**
   - is the underlying operation actually expensive?
   - is the data hot enough to benefit?
   - is the correctness risk acceptable?

3. **Define the cache key strategy**
   - key naming format
   - tenant/user/environment scoping if needed
   - versioning strategy for future key evolution

4. **Define the value and TTL**
   - full object vs partial projection
   - TTL length and why it is appropriate
   - whether null/empty results should be cached

5. **Define invalidation/update behavior**
   - delete-on-write
   - write-through
   - delayed rebuild
   - background refresh

6. **Review failure modes**
   - cache penetration
   - cache breakdown
   - cache avalanche
   - stale reads
   - double-write inconsistency

7. **Define observability**
   - hit rate
   - miss rate
   - rebuild frequency
   - latency impact
   - error paths when Redis is unavailable

## Output format

1. Caching goal
2. Whether cache is justified
3. Key and value design
4. TTL and invalidation strategy
5. Consistency trade-offs
6. Failure-mode handling
7. Monitoring and verification

## Common reminders

- Explicitly discuss cache penetration, breakdown, avalanche, and stale data risks when relevant.
- If strong consistency is required, say so and challenge the cache design.
- Prefer simple, debuggable cache flows over over-engineered cache patterns.
