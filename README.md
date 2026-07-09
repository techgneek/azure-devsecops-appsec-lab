# Azure DevSecOps AppSec Vulnerability Management Lab

This lab demonstrates how I translated enterprise vulnerability management experience into AppSec and DevSecOps. The core lifecycle is the same: identify the weakness, validate the finding, prioritize based on exposure and business risk, coordinate remediation with the owning team, and confirm closure through re-testing.

I am not claiming to be a senior AppSec engineer yet. I am showing that I understand the workflow, the tools, the risk language, and how to work with developers to drive remediation.

## Lab Overview

This repository contains a small Azure-hosted training environment built in phases:

- Terraform provisions the Azure infrastructure.
- A small intentionally vulnerable Node.js app demonstrates common AppSec issues.
- GitHub Actions shows CI/CD plus SAST, DAST, SCA, and secrets scanning.
- The reports folder maps findings to OWASP Top 10 and remediation priorities.

## Architecture Summary

- `infra/` provisions an Azure Resource Group, Linux App Service Plan, and Linux Web App.
- `app/` contains the intentionally vulnerable training application.
- `.github/workflows/` contains deployment and security scanning automation.
- `reports/` contains AppSec findings, OWASP mapping, remediation guidance, and interview notes.

## What The Lab Teaches

- Infrastructure as Code with Terraform
- Azure App Service deployment
- GitHub Actions CI/CD
- SAST
- DAST
- SCA / dependency scanning
- Secrets scanning
- OWASP Top 10
- AppSec vulnerability triage
- Remediation coordination
- How vulnerability management maps to AppSec

## Tools Used

- Terraform
- Azure App Service on Linux
- Node.js and Express
- GitHub Actions
- CodeQL
- OWASP ZAP baseline scan
- Gitleaks
- Dependabot

## How Terraform Fits

Terraform is the lab foundation. It creates the Azure resource group, low-cost Linux App Service Plan, and Linux Web App that will host the app. The Terraform layer also demonstrates naming, outputs, tagging, and cleanup discipline.

## How GitHub Actions Fits

GitHub Actions represents the DevSecOps pipeline. It installs dependencies, runs tests, deploys to Azure App Service, and runs security scanning workflows so you can see how application security is built into delivery instead of added afterward.

## Safety Warning

This is an intentionally vulnerable personal lab only. Do not scan or attack third-party systems. Only run DAST and other active testing against the Azure App Service deployed by this repository in your own subscription.

## Quick Start

1. Review [SECURITY.md](SECURITY.md) and [infra/README.md](infra/README.md).
2. Log in to Azure with `az login`.
3. Copy `infra/terraform.tfvars.example` to `infra/terraform.tfvars`.
4. Run Terraform from the `infra/` directory:
	- `terraform init`
	- `terraform fmt`
	- `terraform validate`
	- `terraform plan`
	- `terraform apply`
5. Capture the Terraform outputs, especially the app service URL.
6. Run the app locally from `app/` with `npm start`.
7. Use the GitHub Actions workflows to deploy and scan the app.
8. Read the reports in `reports/` to practice triage and interview explanations.

## Interview Framing

Use this framing when you talk about the lab:

"This lab demonstrates how I translated my enterprise vulnerability management experience into AppSec and DevSecOps. The core lifecycle is the same: identify the weakness, validate the finding, prioritize based on exposure and business risk, coordinate remediation with the owning team, and confirm closure




