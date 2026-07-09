# Remediation Plan

This plan prioritizes findings the way a vulnerability management analyst would prioritize exposure: severity, exploitability, internet-facing reach, data sensitivity, and business impact.

| Priority | Finding ID | Why It Is Prioritized This Way | Owner | Validation Method |
|---|---|---|---|---|
| P1 | AF-002 | Public debug exposure can reveal internals and is easy to abuse | App developer | Request `/debug` after the fix and confirm it is removed or protected |
| P1 | AF-003 | Broken access control is high impact because it can expose user data directly | App developer / API owner | Re-test with multiple IDs and verify access control blocks unauthorized requests |
| P1 | AF-004 | Excessive data exposure may leak customer and internal data in one response | API owner | Confirm the API response only includes necessary fields |
| P1 | AF-005 | Even a fake secret is a real-pattern training signal and a reminder to remove secrets from code | Developer | Run secrets scanning again and confirm the pattern no longer appears |
| P2 | AF-001 | Missing headers are usually lower risk than data exposure but still weaken the app baseline | App developer | Verify hardening headers are present after middleware changes |
| P2 | AF-006 | Dependency issues are important, but the actual risk depends on whether the vulnerable package is reachable | App developer / build owner | Re-run dependency scanning and confirm alert closure after the upgrade |
| P3 | AF-007 | Unsafe input handling is important, but in this lab it is deliberately simulated and does not hit a real backend | App developer | Validate that user input is normalized or parameterized |

## Prioritization Factors

- **Severity:** High findings affecting access control and exposed data go first.
- **Internet-facing exposure:** Public routes are treated as higher risk than internal-only behavior.
- **Exploitability:** Simple requests that require no credentials are prioritized.
- **Data sensitivity:** Findings that expose secrets, internal notes, or user data move up.
- **Business impact:** Anything that could affect trust, privacy, or compliance gets more attention.
- **Ease of remediation:** Quick fixes are good, but they do not outrank high-risk exposure.
- **Developer owner:** Assign the issue to the team that owns the route or dependency.
- **Validation method:** Every remediation needs a re-test step so closure is evidence-based.

## Triage Flow

1. Confirm the finding is real.
2. Identify the affected route, package, or control.
3. Determine whether the issue is reachable from the internet.
4. Prioritize by data sensitivity and exploitability.
5. Assign to the owning developer or platform team.
6. Re-scan or re-test after the fix.
7. For secret findings, remove the hardcoded value, replace it with a placeholder, and rotate any real secret before re-scanning.
