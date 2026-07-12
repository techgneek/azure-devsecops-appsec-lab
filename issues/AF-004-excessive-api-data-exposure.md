# [AF-004] Minimize Order API Response Data

- Finding ID: AF-004
- Title: Excessive data exposure in `/api/orders/:id`
- Suggested owner: API Owner
- Priority: P1
- Status: Closed

## Summary

The orders API previously returned fields intended for internal use (for example internal notes and token-like fragments) that were not required by the client.

## Affected Route

- `GET /api/orders/:id`

## OWASP Mapping

- OWASP A01: Broken Access Control (data exposure impact)
- Related AppSec concept: Excessive data exposure / response over-sharing

## Risk

Over-shared API responses increase the blast radius of unauthorized access and can leak sensitive or internal operational data.

## Evidence

- Route behavior documented in `app/routes/orders.js`
- Finding tracked in `reports/appsec-findings-report.md` (AF-004)

## Recommended Fix

1. Return only fields required by the consumer.
2. Remove internal notes and token fragment fields from public payloads.
3. Add response schema tests to prevent future over-sharing.

## Validation Steps

1. Call `/api/orders/1001` before fix and capture over-shared payload.
2. Apply response minimization fix.
3. Call `/api/orders/1001` after fix and confirm only required fields remain.
4. Update report status with before/after evidence.

## Definition Of Done

- Public response no longer exposes internal fields.
- API tests confirm minimized response shape.
- Finding AF-004 marked remediated with validation evidence.

## Closure Evidence

- Before evidence: `screenshots/af004-before-api-response-evidence.png`
- After evidence: `screenshots/af004-after-api-response-evidence.png`
- Validation evidence: `screenshots/af004-zap-validation-evidence.png`

## Lessons Learned / Analyst Notes

- Closure should occur only after independent validation confirms internal fields are removed from the live response.
- Response-minimization fixes should be paired with automated contract tests so regression is detected during CI.
- Keep evidence links in the ticket current (before, after, and validation scan) to support audit and faster future triage.
- For similar findings, start by reviewing this ticket's fix pattern: minimize payload to business-required fields, then validate with endpoint re-test and scan evidence.
