# Lab Guide

This guide is the technical execution companion to the README case-study narrative.

## Phase 1: Prerequisites And Access

- Azure CLI
- Terraform
- Node.js
- GitHub account with Actions enabled

Clone the repository locally and open it in VS Code.

Authenticate to Azure:

```bash
az login
```

If needed, select the target subscription with `az account set`.

## Phase 2: Build Azure Infrastructure

From `infra/`:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

Optional: copy `terraform.tfvars.example` to `terraform.tfvars` before planning if you want custom values.

Capture outputs after apply:

- resource group name
- app service name
- app service URL
- region

## Phase 3: Run And Deploy The Application

From `app/` run locally:

```bash
npm install
npm start
```

Deploy to Azure through GitHub Actions using `deploy.yml` after required repository secrets are configured.

## Phase 4: Execute AppSec Scans

Run these workflows:

1. `codeql.yml` for SAST
2. Dependabot for dependency monitoring (SCA)
3. `secrets-scan.yml` for secret-pattern detection
4. `zap-baseline.yml` for DAST baseline checks

Use ZAP only against the Azure App Service URL from this lab.

## Phase 5: Triage And Reporting

Use `reports/` to walk findings through the full workflow:

1. Confirm finding validity and reachability.
2. Map to OWASP category.
3. Assign priority and owner.
4. Define validation method before closure.

Primary references:

- `reports/appsec-findings-report.md`
- `reports/owasp-top-10-mapping.md`
- `reports/remediation-plan.md`

## Phase 6: Remediate One Finding

Pick one finding and complete end-to-end closure:

1. implement the fix
2. capture owner and action taken
3. re-run affected scan/test
4. update status with validation evidence

Secrets scan example:

- remove hardcoded value
- replace with non-secret placeholder
- rotate value if it was ever real
- re-run `secrets-scan.yml`

## Phase 7: Validation Evidence

Closure is complete only when re-testing confirms the issue no longer reproduces.

Documented lab closure sample:

- `Secrets Scan` run `28994165739` passed after hardcoded secret pattern removal.

## Phase 8: Teardown

When done, destroy Azure resources to avoid unnecessary cost.
