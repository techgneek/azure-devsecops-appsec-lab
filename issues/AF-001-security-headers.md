# [AF-001] Implement Security Header Baseline

- Finding ID: AF-001
- Title: Missing browser security headers on `/headers`
- Suggested owner: App Developer
- Priority: P2
- Status: Open

## Summary

The app demonstrates missing baseline security headers. This weakens browser-side hardening and allows avoidable attack surface.

## Affected Route

- `GET /headers`

## OWASP Mapping

- OWASP A05: Security Misconfiguration

## Risk

Missing hardening headers can increase risk from clickjacking, MIME sniffing, and weak browser execution policy.

## Evidence

- Route behavior documented in `app/routes/headers.js`
- Finding tracked in `reports/appsec-findings-report.md` (AF-001)

## Recommended Fix

1. Add Helmet middleware (or equivalent) at app level.
2. Apply a safe baseline policy for CSP, frame options, content type options, and related controls.
3. Verify `/headers` reflects improved header posture.

## Validation Steps

1. Capture before state from `/headers` route output.
2. Apply middleware hardening.
3. Capture after state from `/headers` route output.
4. Re-run ZAP baseline when practical and compare header findings.

## Definition Of Done

- Baseline security headers are present in responses.
- `/headers` evidence demonstrates improvement.
- Finding AF-001 updated with remediation and validation notes.
