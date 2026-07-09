# IaC Security Notes

## What IaC Scanning Is

Infrastructure as Code scanning reviews Terraform before deployment to detect insecure cloud configurations early.

## Why Terraform Should Be Scanned Before Deployment

Scanning before apply helps prevent risky configurations from reaching Azure environments where remediation is slower and more disruptive.

## Common IaC Risks

Checkov commonly detects risks such as:

- missing encryption settings
- overly permissive network exposure
- weak identity/access configuration
- missing security logging and monitoring controls
- insecure defaults in cloud resources

## How IaC Findings Map To Vulnerability Management

IaC findings can be handled with the same lifecycle used for vulnerability management:

1. identify the misconfiguration in code
2. prioritize based on exposure and business impact
3. assign ownership to cloud/platform team
4. remediate in Terraform
5. validate by re-running IaC scan and reviewing plan

## Validation Of Remediation

IaC remediation should be validated by:

1. updating Terraform code
2. re-running Checkov against `infra/`
3. verifying findings are reduced or closed
4. documenting closure evidence in reports/workflow artifacts

## Local Command

```bash
checkov -d infra
```

## GitHub Actions Workflow

This repository includes a manually runnable workflow:

- `.github/workflows/checkov-iac-scan.yml`

The workflow scans only `infra/` and uploads scan output as an artifact.
