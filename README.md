# Application Security Vulnerability Management Program Simulation

This project simulates the implementation of a lightweight Application Security vulnerability management workflow using Azure, Terraform, GitHub Actions, and common AppSec scanning tools.

***Inception State:*** the application has no formal AppSec vulnerability workflow, no repeatable scan process, no OWASP Top 10 mapping, no documented remediation ownership, and no evidence-based validation process after fixes are made.

***Completion State:*** Azure infrastructure is deployed with Terraform, a training application is hosted on Azure App Service, AppSec scanning is integrated into GitHub Actions, findings are mapped to OWASP Top 10, remediation actions are documented, and closure can be validated through re-scanning.

---

## Architecture at a Glance

<img width="1000" alt="Architecture at a glance" src="screenshots/architecture-thumbnail-v2.png">

---

## Technology Stack

- Terraform
- Azure App Service
- Node.js / Express
- Docker
- GitHub Actions
- CodeQL
- Gitleaks
- Dependabot
- Trivy
- Checkov
- OWASP ZAP Baseline
- OWASP Top 10

---

## Table of Contents

- [AppSec Lifecycle](#appsec-lifecycle)
- [Architecture at a Glance](#architecture-at-a-glance)
- [Technology Stack](#technology-stack)
- [Build and Deployment Flow](#build-and-deployment-flow)
- [Security Testing Coverage](#security-testing-coverage)
- [Application Risk Scenarios](#application-risk-scenarios)
- [Findings, Risk Mapping, and Ownership](#findings-risk-mapping-and-ownership)
- [Remediation and Validation Proof](#remediation-and-validation-proof)
- [Secure SDLC Alignment](#secure-sdlc-alignment)
- [Program Outcome](#program-outcome)
- [What I Would Improve Next](#what-i-would-improve-next)
- [Supporting Documentation](#supporting-documentation)

---

## AppSec Lifecycle

This project uses one repeatable lifecycle for handling application security findings:

1. Identify application risk.
2. Validate that the finding is real.
3. Map to OWASP and secure SDLC concepts.
4. Prioritize based on exposure, exploitability, and business impact.
5. Assign remediation ownership.
6. Remediate (fix the issue).
7. Re-test and capture closure evidence.

---

## Build and Deployment Flow

| Layer | Tool | Purpose |
| --- | --- | --- |
| Infrastructure | Terraform | Builds Azure Resource Group, App Service Plan, and Linux Web App |
| Cloud Runtime | Azure App Service | Hosts the training application |
| Application | Node.js / Express | Provides controlled AppSec test routes |
| Container | Docker | Packages the app as a scannable container image |
| CI/CD | GitHub Actions | Runs deployment and security workflows |

| Deployment Evidence | Why It Matters |
| --- | --- |
| ![GitHub Actions deploy workflow](screenshots/deploy-workflow-evidence.png) | Shows deployment is handled through CI/CD instead of manual upload. |

Detailed setup commands and local run instructions are kept in `LAB-GUIDE.md` and `infra/README.md` so the main README stays focused on the end-to-end program flow.

---

## Security Testing Coverage

| Security Area | Tool | What It Shows |
| --- | --- | --- |
| SAST | CodeQL | Source code analysis |
| Secrets Scanning | Gitleaks | Hardcoded secret detection |
| SCA | Dependabot | Dependency risk monitoring |
| Container Security | Trivy | Container image vulnerability scanning |
| IaC Security | Checkov | Terraform misconfiguration scanning |
| DAST | OWASP ZAP Baseline | Running app testing |

| Scan Evidence | Why It Matters |
| --- | --- |
| ![Security testing workflow evidence](screenshots/security-testing-coverage-evidence.png) | Shows security workflows are correctly configured and executed in CI, with successful run status across the scanning stack used in this lab. |

This is where the lab shifts from being a vulnerable app to being an AppSec workflow. The scans create signals, and the reports turn those signals into prioritized remediation work.

---

## Application Risk Scenarios

The app contains routes that demonstrate common application security concerns in a safe, controlled way.

| Route | Screenshot | AppSec Concept |
| --- | --- | --- |
| `/` | ![Home page route list](screenshots/home-route1.png) | Lab landing page and route map |
| `/profile?id=1` | ![Profile endpoint response id=1](screenshots/profile-id-1-evidence.png) | Broken access control / IDOR-style behavior |
| `/profile?id=2` | ![Profile endpoint response id=2](screenshots/profile-id-2-evidence.png) | Direct object reference returns a different profile without object-level authorization enforcement |
| `/debug` | ![Debug endpoint response evidence](screenshots/debug-route-evidence.png) | Debug exposure and secret-handling risk |
| `/api/orders/:id` | ![Orders API response evidence](screenshots/orders-route-evidence.png) | Excessive data exposure in API responses |
| `/headers` | ![Header route response evidence](screenshots/headers-route-evidence.png) | Missing browser security headers |

The point is not to exploit anything. The point is to show how a security analyst can observe application behavior, identify risk patterns, collect evidence, and translate the issue into remediation guidance.

### Before Evidence: Broken Access Control (`/profile?id=1`)

- Before signal: profile data is returned for direct identifier input without an ownership validation check in the request flow.
- Risk meaning: this reflects an IDOR-style broken access control pattern where object access is not constrained to the requesting identity.

### Before Evidence: Debug Exposure (`/debug`)

- Before signal: the debug route returns internal application/runtime details that are not required for normal user-facing behavior.
- Risk meaning: this is an information disclosure pattern that improves attacker reconnaissance and reduces uncertainty for follow-on attacks.

### Before Evidence: API Data Exposure (`/api/orders/:id`)

- Before signal: the orders API response includes internal order attributes beyond what a consumer-facing client requires.
- Risk meaning: this is an excessive data exposure pattern where unnecessary fields increase data leakage risk and downstream misuse potential.

### Before Evidence: Missing Security Headers (`/headers`)

- Before signal: browser-facing security headers are absent or incomplete in HTTP responses.
- Risk meaning: this weakens baseline client-side protections and increases exposure to common browser-mediated attack classes.

---

## Findings, Risk Mapping, and Ownership

This section summarizes how findings are documented, mapped, and handed off for remediation.

Each finding is tracked with:

- finding ID
- tool or evidence source
- severity
- OWASP category
- business risk
- recommended fix
- owner
- status
- validation step

Issue-style handoff templates in `issues/` are used to simulate developer ownership and remediation workflow.

Detailed tracking and mapping are maintained in:

- `reports/appsec-findings-report.md`
- `reports/owasp-top-10-mapping.md`
- `reports/remediation-plan.md`
- `reports/secure-sdlc-nist-mapping.md`
- `issues/`

---

## Remediation and Validation Proof

This section shows the two primary remediation rounds and their validation outcomes.

| Finding | Before | After | Validation |
| --- | --- | --- | --- |
| AF-001 Security Headers | Missing baseline security headers | Hardened header set | Re-tested `/headers` and captured after evidence |
| AF-004 API Data Exposure | API returned internal fields | Response minimized to required fields | Re-tested `/api/orders/1001` and captured after evidence |

### AF-001 Security Headers Before/After

| Before | After |
| --- | --- |
| ![Before security headers remediation](screenshots/before-security-headers.png) | ![After security headers remediation](screenshots/after-security-headers.png) |

### AF-004 API Data Exposure Before/After

| Before | After |
| --- | --- |
| ![Before API data exposure remediation](screenshots/before-api-data-exposure.png) | ![After API data exposure remediation](screenshots/after-api-data-exposure.png) |

---

## Secure SDLC Alignment

This lab maps to secure SDLC phases in practical terms:

- **Design:** define AppSec workflow, risk triage method, and OWASP mapping.
- **Build:** implement Terraform infrastructure and application code changes.
- **Test:** run SAST, DAST, SCA, secrets scanning, container scanning, and IaC scanning.
- **Release:** deploy through a CI/CD workflow in GitHub Actions.
- **Operate:** track findings, assign owners, prioritize remediation, and validate closure with evidence.

---

## Program Outcome

This project established a complete AppSec vulnerability management workflow in a controlled Azure lab environment.

| Outcome | Result |
| --- | --- |
| Cloud infrastructure | Azure App Service environment provisioned with Terraform |
| Application target | Intentionally vulnerable Node.js app deployed for safe AppSec testing |
| Scanning layers | SAST, DAST, SCA-style dependency monitoring, and secrets scanning represented |
| Findings documented | 7 AppSec findings captured in a triage report |
| OWASP mapping | Findings mapped to common OWASP Top 10 categories |
| Remediation plan | Findings prioritized by exposure, exploitability, and business risk |
| Validation loop | Re-test steps documented for each major finding |

The strongest takeaway is that AppSec is not disconnected from vulnerability management. The workflow is familiar: identify, validate, prioritize, assign ownership, remediate, and re-test.

As a final summary, this project demonstrates an end-to-end AppSec vulnerability management workflow in a controlled Azure lab. It combines infrastructure provisioning, CI/CD-integrated scanning, OWASP-based categorization, remediation ownership, and evidence-based validation to show how findings move from detection to closure.

## Supporting Documentation

Use the files below for setup details, report depth, and remediation evidence:

- `LAB-GUIDE.md`
- `SECURITY.md`
- `infra/README.md`
- `reports/appsec-findings-report.md`
- `reports/remediation-plan.md`
- `reports/owasp-top-10-mapping.md`
- `reports/secure-sdlc-nist-mapping.md`
- `reports/remediation-rounds.md`
- `reports/container-security-notes.md`
- `reports/iac-security-notes.md`
- `issues/`

## What I Would Improve Next

- Add a standardized triage worksheet per finding to reduce review variability.
- Integrate ASM / CAASM tooling for broader asset and exposure visibility.
- Add SOAR-style automation to create tickets from validated findings.
- Add Jenkins as an additional CI/CD pipeline example.
- Add deeper authentication and authorization workflows.
- Add API schema testing and rate-limit testing.
- Expand secure coding examples with before/after pull requests.
- Map findings to additional frameworks such as NIST SSDF, NIST CSF, and CIS Controls.
- Add trend tracking across scan cycles to show reduction over time.
- Add defined SLA targets by severity for simulated AppSec operations.
