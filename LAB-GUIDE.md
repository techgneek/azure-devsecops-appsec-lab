# Lab Guide

This guide walks through the lab in a beginner-friendly order.

## 1. Prerequisites

- Azure CLI
- Terraform
- GitHub account
- Node.js
- GitHub Actions enabled in the repository

## 2. Clone the Repo

Clone the repository to your local machine and open it in VS Code.

## 3. Authenticate To Azure

Run:

```bash
az login
```

If needed, choose the subscription for the lab with `az account set`.

## 4. Run Terraform

From the `infra/` directory run:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

Copy `terraform.tfvars.example` to `terraform.tfvars` before planning if you want to override defaults.

## 5. Capture Terraform Outputs

Save the resource group name, app service name, app service URL, and region after apply.

## 6. Run The App Locally

From the `app/` directory run:

```bash
npm install
npm start
```

## 7. Deploy The App To Azure

Use the `deploy.yml` workflow after configuring the required GitHub secrets.

## 8. Run CodeQL

Use the `codeql.yml` workflow to demonstrate SAST.

## 9. Run Dependabot / Dependency Scan

Dependabot monitors the npm package file and GitHub Actions dependencies for SCA-style learning.

## 10. Run Secrets Scan

Use `secrets-scan.yml` to detect the fake hardcoded secret and any other accidental secret patterns.

## 11. Run OWASP ZAP Baseline Scan

Use `zap-baseline.yml` only against the Azure App Service URL from this lab.

## 12. Review Reports

Read the documents in `reports/` to practice triage, OWASP mapping, and remediation planning.

## 13. Remediate One Issue

Pick one finding, fix it, and document the owner and validation method.

## 14. Re-Run Scan And Validate

Run the relevant scan again and confirm the issue is closed.

## 15. Destroy Azure Resources

When you are done, destroy the resources to avoid unnecessary Azure cost.
