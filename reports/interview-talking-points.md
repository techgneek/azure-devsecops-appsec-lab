# Interview Talking Points

## 1. 60-second explanation of the lab

I built a focused Azure DevSecOps AppSec lab to translate my vulnerability management experience into application security practice. Terraform provisions an Azure Resource Group, Linux App Service Plan, and Linux Web App. I then deployed a small intentionally vulnerable Node.js training app and added GitHub Actions for deployment, CodeQL, dependency monitoring, secrets scanning, and OWASP ZAP baseline scanning. The lab lets me practice identifying app issues, mapping them to OWASP Top 10, prioritizing them like a vulnerability workflow, coordinating remediation, and re-testing the fix.

## 2. 30-second explanation of how VM maps to AppSec

My VM background maps cleanly to AppSec because the workflow is the same: identify the weakness, validate it, prioritize based on exposure and business risk, assign an owner, and verify remediation. The main difference is that the assets are now applications, APIs, repositories, dependencies, and secrets instead of only infrastructure endpoints.

## 3. How I would triage AppSec findings

I would first confirm the finding is reproducible and reachable. Then I would look at severity, internet exposure, data sensitivity, exploitability, and how easy the fix is. After that I would assign it to the right developer or platform owner with clear evidence and a re-test step.

## 4. How I would work with developers

I would keep the feedback practical: what the issue is, why it matters, how to reproduce it, and what a reasonable fix looks like. I would avoid vague security language when possible and focus on the code path, the business impact, and how we will verify closure.

## 5. How I would explain SAST

SAST is static analysis of source code. It looks for risky patterns before the app is running, such as unsafe input handling, insecure API use, or access-control mistakes.

## 6. How I would explain DAST

DAST tests the running app from the outside, like an attacker would. It is useful for finding exposed debug paths, missing security headers, and behavior that only appears once the app is live.

## 7. How I would explain SCA

SCA checks third-party dependencies for known vulnerabilities. It helps catch risks that are not in my own code but still affect the app because the app imports those packages.

## 8. How I would explain secrets scanning

Secrets scanning looks for passwords, API keys, tokens, and other sensitive values that should never be committed to source control. It is important because even a short hardcoded secret can become a real incident if it is real and reachable.

## 9. How I would explain OWASP Top 10

OWASP Top 10 is a simple way to group common application risks. It helps me explain findings in categories like broken access control, injection, and security misconfiguration instead of just saying the code looks unsafe.

## 10. How I would honestly say I am newer to AppSec

I am newer to hands-on AppSec, but I am not new to risk management. I already know how to validate findings, prioritize by exposure, coordinate remediation, and prove closure through re-testing. That is the part of the workflow I am bringing into AppSec.

## 11. Questions to ask the interviewer

- How does your team prioritize app findings versus infrastructure findings?
- Which tools do you use for SAST, DAST, SCA, and secrets scanning?
- How do developers receive and validate AppSec remediation work?
- What does a good AppSec intake and triage process look like here?
- How do you measure risk reduction after a fix is shipped?
