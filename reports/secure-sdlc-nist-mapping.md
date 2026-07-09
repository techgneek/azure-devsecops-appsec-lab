# Secure SDLC and NIST Mapping

## Purpose

This report maps the lab AppSec workflow to secure SDLC concepts and common security frameworks. The goal is to show how scanning, triage, ownership, remediation, and validation activities connect to broader security governance language.

## Frameworks Referenced

- OWASP Top 10
- NIST Secure Software Development Framework (NIST SSDF / SP 800-218)
- NIST Cybersecurity Framework (NIST CSF)
- CIS Controls

This is a practical portfolio mapping, not a formal compliance attestation.

## Lab-to-Framework Mapping

| Lab Activity | AppSec Purpose | OWASP Mapping | NIST SSDF / Secure SDLC Alignment | NIST CSF Alignment | CIS Controls Alignment | Evidence in This Repo |
| --- | --- | --- | --- | --- | --- | --- |
| Terraform infrastructure build | Provision repeatable cloud infrastructure with baseline settings | Security Misconfiguration (risk prevention context) | Secure design and implementation of deployment infrastructure | Identify, Protect | Enterprise asset and configuration management | `infra/`, `infra/README.md` |
| Checkov IaC scanning | Detect Terraform misconfigurations before deployment | Security Misconfiguration | Verification of infrastructure-as-code security requirements | Identify, Detect | Secure configuration management | `.github/workflows/checkov-iac-scan.yml`, `reports/iac-security-notes.md` |
| GitHub Actions CI/CD workflow | Enforce repeatable build/test/deploy flow with traceable evidence | Supports multiple OWASP risk-reduction categories through process control | Secure release and deployment workflow | Protect, Detect, Respond | Secure software lifecycle management | `.github/workflows/deploy.yml`, `.github/workflows/` |
| CodeQL SAST | Find risky source code patterns before release | Injection, Broken Access Control, Security Misconfiguration (pattern dependent) | Secure coding verification and code review automation | Detect, Protect | Application software security | `.github/workflows/codeql.yml`, `reports/appsec-findings-report.md` |
| Dependabot dependency monitoring | Track vulnerable/outdated package risk | Vulnerable and Outdated Components | Third-party component risk monitoring in build pipeline | Identify, Protect | Continuous vulnerability management | `app/package.json`, Dependabot alerts (repository), `reports/appsec-findings-report.md` |
| Gitleaks secrets scanning | Detect hardcoded secret patterns in source | Security Misconfiguration, Cryptographic Failures (secret handling context) | Protect sensitive data in source and build workflow | Protect, Detect | Data protection and secure development practices | `.github/workflows/secrets-scan.yml`, `reports/appsec-findings-report.md` |
| OWASP ZAP baseline DAST | Identify externally visible web security weaknesses | Security Misconfiguration, Injection, Access Control findings (surface dependent) | Dynamic verification of running application behavior | Detect | Application security testing | `.github/workflows/zap-baseline.yml`, `reports/appsec-findings-report.md` |
| Trivy container scanning | Detect vulnerabilities in container image layers and libraries | Vulnerable and Outdated Components | Verification of packaged runtime components before promotion | Identify, Detect | Vulnerability management for software assets | `.github/workflows/trivy-container-scan.yml`, `reports/container-security-notes.md` |
| Findings triage report | Convert scan/manual evidence into risk-ranked remediation work | Cross-category OWASP mapping based on finding type | Secure SDLC governance through documented analysis and prioritization | Identify, Respond | Vulnerability management process | `reports/appsec-findings-report.md` |
| GitHub issue-style ownership templates | Assign remediation to specific engineering owners with validation steps | Cross-category, ownership workflow supporting all mapped findings | Remediation planning and accountability in development workflow | Respond, Recover | Incident and remediation workflow discipline | `issues/AF-001-security-headers.md`, `issues/AF-003-object-level-authorization.md`, `issues/AF-004-excessive-api-data-exposure.md` |
| Remediation plan | Prioritize fix order by impact, exploitability, and exposure | Cross-category prioritization | Planned secure remediation and validation sequencing | Respond | Risk treatment and remediation planning | `reports/remediation-plan.md` |
| Before/after remediation proof gallery | Demonstrate evidence-based closure, not just code change claims | Security Misconfiguration, Broken Access Control (for completed rounds) | Validation and closure evidence in secure SDLC cycle | Respond, Recover | Verification of remediation effectiveness | `reports/remediation-rounds.md`, `README.md`, `screenshots/` |

## Summary

This mapping shows how the lab connects practical AppSec work to secure SDLC and governance frameworks. It links infrastructure scanning, code and dependency checks, runtime testing, ownership, and validation evidence so the workflow can be discussed consistently across engineering and security audiences.
