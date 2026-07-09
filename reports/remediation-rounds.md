# Remediation Rounds

## Remediation Round 1: Security Header Hardening

### Before Evidence Needed

- Browser capture of `/headers` showing missing security headers.
- Expected screenshot file: `screenshots/before-security-headers.png`.

### Fix Summary

- Added Helmet middleware at app level.
- Added explicit `Permissions-Policy` response header middleware.
- Updated `/headers` route to report response hardening status from response headers.

### Files Changed

- `app/app.js`
- `app/routes/headers.js`
- `app/tests/app.test.js`
- `app/package.json`
- `app/package-lock.json`

### Validation Command

```bash
cd app
npm test
```

Route-level validation:

```bash
curl -sS http://localhost:3000/headers
```

### After Evidence Needed

- Browser capture of `/headers` showing improved header posture and reduced/empty missing header list.
- Expected screenshot file: `screenshots/after-security-headers.png`.

### Interview Explanation

This remediation demonstrates OWASP Security Misconfiguration hardening by moving from missing browser controls to a documented baseline. It also shows the operational loop: finding, fix implementation, route re-test, and evidence capture.

## Remediation Round 2: API Response Data Minimization

Planned for next phase.
