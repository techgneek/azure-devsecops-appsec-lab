# OWASP Top 10 Mapping

OWASP Top 10 is similar to vulnerability categories for application security. Instead of focusing only on infrastructure CVEs, it groups common software risk patterns such as broken access control, injection, vulnerable components, security misconfiguration, and authentication failures.

## Plain-English Summary

- **Broken Access Control** means users can see or change data they should not be able to reach.
- **Injection** means untrusted input changes the meaning of a command, query, or template.
- **Security Misconfiguration** means the app is left in a weak or overly verbose state.
- **Vulnerable and Outdated Components** means third-party libraries may contain known weaknesses.
- **Cryptographic Failures** means sensitive data is not properly protected, or secrets are exposed.

## Lab Mapping

| Lab Finding | OWASP Top 10 Category | Why It Fits |
|---|---|---|
| Missing security headers | Security Misconfiguration | The app is missing hardening headers that should be part of a secure baseline |
| Debug endpoint exposed | Security Misconfiguration | An internal or debug-only feature is reachable in a way that should not be allowed |
| IDOR-style profile access | Broken Access Control | A caller can request object data by ID without authorization checks |
| Excessive data exposure from API | Broken Access Control | The API returns more data than the caller needs and does not minimize sensitive fields |
| Fake hardcoded secret | Cryptographic Failures / Security Misconfiguration | Secret material should never be embedded in source or responses |
| Vulnerable dependency | Vulnerable and Outdated Components | Third-party packages must be monitored and updated when issues are discovered |
| Unsafe input handling | Injection | Raw user input is treated as part of a query-like string without validation |

## Interview-Friendly Explanation

If I were explaining this in an interview, I would say that OWASP Top 10 is the app security version of the risk categories I already know from vulnerability management. The difference is that instead of servers and network devices, I am looking at code paths, APIs, dependencies, secrets, and authorization boundaries.

## Additional Framework Mapping

OWASP is the primary AppSec category mapping for this lab. A broader secure SDLC and NIST-style mapping is available in `reports/secure-sdlc-nist-mapping.md`.
