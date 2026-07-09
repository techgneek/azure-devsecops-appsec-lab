# Container Security Notes

## What Container Scanning Is

Container scanning reviews a built image for known vulnerabilities in:

- base OS packages
- application dependencies
- language libraries included in the image

It helps detect risk before a container is promoted to production.

## What Trivy Checks

For this lab, Trivy checks:

- OS-level vulnerabilities from the base image
- Node.js package vulnerabilities in bundled dependencies
- severity levels (Critical, High, Medium, Low)

## Why This Matters To Vulnerability Management

Container images are now an asset type in the same lifecycle you already use:

1. Identify findings in the image.
2. Prioritize by severity, reachability, and exposure.
3. Assign remediation to app owner or platform owner.
4. Validate closure by rebuilding and re-scanning the image.

## Prioritization Approach For Container Findings

- P1: Critical/high vulnerabilities in internet-facing runtime paths or core packages.
- P2: Medium vulnerabilities with plausible exploitability.
- P3: Low impact findings or non-runtime packages.

Risk decisions should still include context: app exposure, dependency usage, and compensating controls.

## Validation Of Closure

Container finding closure should be validated by:

1. Updating vulnerable base image or dependency.
2. Rebuilding the container image.
3. Re-running Trivy and comparing results.
4. Documenting reduced severity count or closed finding IDs.

## Local Command

```bash
cd app
docker build -t azure-devsecops-appsec-lab:local .
trivy image azure-devsecops-appsec-lab:local
```

## GitHub Actions Workflow

This repository includes a manually runnable workflow:

- `.github/workflows/trivy-container-scan.yml`

The workflow builds the app image, runs Trivy in table format, and uploads the scan report as an artifact.
