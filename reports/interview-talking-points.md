# Interview Talking Points

## 1. 60-second explanation of the project

I built an Application Security vulnerability management program simulation in Azure. Terraform provisions the platform, a purposely vulnerable Node.js app provides realistic AppSec findings, and GitHub Actions runs CodeQL, secrets scanning, dependency monitoring, and ZAP baseline checks. The point of the project is not just finding issues. It is showing a full operating cycle: identify, validate, prioritize, assign ownership, remediate, and re-test.

## 2. Inception state and completion state

Inception state: no consistent AppSec workflow existed for this application, and findings were not moving through a repeatable triage and validation process.

Completion state: scans are integrated into CI/CD, findings are mapped to OWASP Top 10, remediation ownership is documented, and at least one finding is closed with validation evidence.

## 3. 30-second VM to AppSec translation

My VM background transfers directly because the risk workflow is the same: confirm the issue, assess exposure, prioritize by business impact, assign an owner, and verify closure. The difference is the asset type. In AppSec, I am evaluating code paths, APIs, dependencies, and secrets instead of only infrastructure endpoints.

## 4. How I triage AppSec findings

I confirm reproducibility first, then check internet reachability, data sensitivity, exploitability, and blast radius. I assign severity and owner, define the validation step before closure, and avoid marking a finding closed until a re-test proves the fix.

## 5. How I work with developers and DevOps

I keep it practical and operational: what broke, why it matters, where it lives, what fix pattern is expected, and what evidence closes it. I focus on code paths and business impact, not generic security wording.

## 6. How I explain scan layers quickly

- SAST (CodeQL): catches risky patterns in source before runtime.
- DAST baseline (ZAP): checks behavior and hardening gaps in the running app.
- SCA (Dependabot): tracks vulnerable third-party packages.
- Secrets scanning (Gitleaks): finds hardcoded credentials and secret patterns in code history.

## 7. How I explain OWASP Top 10 usage

OWASP Top 10 is the normalization layer for communication. It lets me translate raw findings into standard risk categories that engineering, security, and leadership can prioritize consistently.

## 8. How I discuss AppSec experience honestly

I am newer to hands-on AppSec tooling depth, but not new to risk operations. I already know how to run a remediation lifecycle with ownership, deadlines, and validation evidence. This project shows that transfer in practice.

## 9. Evidence-backed points to mention

- 7 structured findings documented.
- 5 OWASP categories mapped.
- 4 scan layers integrated into delivery.
- Secret finding closure documented with re-scan evidence.

## 10. Questions to ask the interviewer

- How is AppSec triage integrated with engineering planning and release workflows?
- Which findings require proof-of-fix before closure in your environment?
- How do you balance false-positive reduction with scan coverage?
- What is your expected remediation SLA by severity?
- How do you measure AppSec program maturity quarter over quarter?
