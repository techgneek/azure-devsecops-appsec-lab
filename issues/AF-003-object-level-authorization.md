# [AF-003] Enforce Object-Level Authorization on Profile Route

- Finding ID: AF-003
- Title: IDOR-style broken access control on `/profile?id=`
- Suggested owner: App Developer / API Owner
- Priority: P1
- Status: Open

## Summary

The `/profile` endpoint returns profile data based only on a user-supplied ID. The route does not enforce object-level authorization checks against caller identity.

## Affected Route

- `GET /profile?id=<id>`

## OWASP Mapping

- OWASP A01: Broken Access Control

## Risk

A caller may retrieve another user's profile data by changing the ID parameter. In production scenarios this can lead to unauthorized data disclosure.

## Evidence

- Route behavior documented in `app/routes/profile.js`
- Finding tracked in `reports/appsec-findings-report.md` (AF-003)

## Recommended Fix

1. Bind requests to authenticated identity context.
2. Enforce object-level authorization before returning profile data.
3. Return `403` for unauthorized profile access attempts.
4. Add tests for authorized and unauthorized access paths.

## Validation Steps

1. Request `/profile?id=1` as authorized user and confirm success.
2. Request `/profile?id=2` as unauthorized user and confirm `403`.
3. Re-run app tests and confirm access-control tests pass.
4. Update finding status in reports when validation evidence is captured.

## Definition Of Done

- Unauthorized object access blocked.
- Regression tests added and passing.
- Finding AF-003 updated with closure evidence and owner sign-off.
