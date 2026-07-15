# LinkedIn Drip Campaign: AppSec Vulnerability Management Program

## Campaign Goal

Tell a story-first AppSec portfolio case study that shows how vulnerability management discipline transfers into application security: identifying risk, validating it, assigning ownership, remediating it, and proving closure with evidence.

## Primary Repository Link

```text
https://github.com/techgneek/azure-devsecops-appsec-lab/blob/main/README.md
```

## Campaign Timeline

| Day | Post | Thumbnail | Hook |
| --- | --- | --- | --- |
| Day 1 | From Deployment to a Real AppSec Program | [post-01-appsec-program.png](thumbnails/post-01-appsec-program.png) | Imagine launching one app and uncovering five security issues on day one. |
| Day 4 | A Finding Is Not Yet Remediation Work | [post-02-finding-to-owner.png](thumbnails/post-02-finding-to-owner.png) | A scanner result is useful. A finding without ownership is just noise. |
| Day 8 | Why “Fixed” Still Needs Proof | [post-03-remediation-proof.png](thumbnails/post-03-remediation-proof.png) | A developer saying “it’s fixed” is not the end of the story. It’s the beginning of validation. |

---

## Post 1: From Deployment to a Real AppSec Program

### Suggested Thumbnail

![Post 1 thumbnail](thumbnails/post-01-appsec-program.png)

### Thumbnail Headline

FIVE ISSUES. ONE APP.

### Post Copy

```text
Imagine launching one app and uncovering five security issues on day one.

That was the pressure I wanted this controlled lab to simulate.

Because the real story was never just “I deployed an app.”

It was this: what has to exist before the first finding even matters?

I built the project as an Application Security vulnerability management lab, not a tool demo.

The starting point was intentionally incomplete:
- no formal AppSec workflow
- no repeatable scan process
- no consistent OWASP mapping
- no clear remediation ownership
- no evidence-based closure process

So I started where real security programs start: with infrastructure, structure, and repeatability.

Terraform provisioned the Azure foundation.
Azure App Service hosted the training app.
GitHub Actions carried deployment and security checks.
And layered scanning turned raw signal into something the team could actually act on.

That is the part I wanted the lab to prove.

The lesson is not “look at the tools.”

The lesson is that vulnerability management discipline translates cleanly into AppSec:
identify the issue, validate it, explain the risk, assign it, remediate it, and prove it is closed.

If you were building this lab, what would you add first to make the workflow feel more realistic?
```

### Technical Evidence Used

- `README.md`
- `LAB-GUIDE.md`
- `infra/README.md`
- `infra/main.tf`
- `.github/workflows/deploy.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/secrets-scan.yml`
- `.github/workflows/checkov-iac-scan.yml`
- `.github/workflows/trivy-container-scan.yml`
- `.github/workflows/trivy-iac-scan.yml`
- `.github/workflows/zap-baseline.yml`
- `screenshots/architecture-thumbnail-v2.png`
- `screenshots/deploy-workflow-evidence.png`
- `screenshots/security-testing-coverage-evidence.png`

---

## Post 2: A Finding Is Not Yet Remediation Work

### Suggested Thumbnail

![Post 2 thumbnail](thumbnails/post-02-finding-to-owner.png)

### Thumbnail Headline

A FINDING IS NOT A FIX

### Post Copy

```text
A scanner result is useful.

A finding without ownership is just noise.

This is where the story gets more interesting.

One of the strongest findings in the lab is AF-004 on `GET /api/orders/:id`. The route exposed more data than the client needed, including internal-only fields like `internalNotes` and `paymentTokenLast4`.

That may sound small at first.

It isn’t.

Over-shared API responses increase the blast radius if data is accessed or reused in the wrong place. In real work, that is exactly when a technical issue turns into a security and governance problem.

What I like about this part of the lab is that it mirrors how vulnerability management actually works:
- validate the finding
- explain the risk in plain English
- map it to OWASP
- assign the right owner
- define what closure should look like

AF-004 was documented, risk-ranked as P1, mapped to OWASP A01: Broken Access Control, and handed to the API owner with a remediation path that was actually actionable.

That is the real lesson.

The finding itself is not the finish line. The valuable work is turning the signal into understandable, owned remediation work that somebody can close with proof.

If you triage findings today, what do you need before you consider them real work instead of scanner noise?
```

### Technical Evidence Used

- `issues/AF-004-excessive-api-data-exposure.md`
- `reports/appsec-findings-report.md`
- `reports/owasp-top-10-mapping.md`
- `reports/remediation-plan.md`
- `app/routes/orders.js`
- `screenshots/orders-route-evidence.png`
- `screenshots/af004-before-api-response-evidence.png`

---

## Post 3: Why “Fixed” Still Needs Proof

### Suggested Thumbnail

![Post 3 thumbnail](thumbnails/post-03-remediation-proof.png)

### Thumbnail Headline

FIXED IS NOT ENOUGH

### Post Copy

```text
A developer saying “it’s fixed” is not the end of the story.

It’s the beginning of validation.

This is the part I think more teams should talk about.

In the lab, AF-004 was remediated by minimizing the API response so only business-required fields remained. The internal-only fields were removed, and the code was backed by automated tests that check the response shape.

That matters because security work is not complete when the code changes.

It is complete when the risk has been independently re-tested and the evidence supports closure.

The workflow here was straightforward:
- Identify
- Validate
- Map
- Prioritize
- Assign
- Remediate
- Re-test

The before/after evidence makes the difference visible. The ticket shows the intent. The code shows the change. The tests show the guardrail. The re-test and ZAP validation show the closure story.

That is the bridge between vulnerability management and AppSec: not just finding issues, but proving they are actually gone.

And honestly, that is the standard I want to keep raising for myself.

What do you require before you call a fix closed? What would you add to this workflow to make it stronger?
```

### Technical Evidence Used

- `app/routes/orders.js`
- `app/tests/app.test.js`
- `reports/remediation-rounds.md`
- `reports/appsec-findings-report.md`
- `screenshots/af004-remediation-code-evidence.png`
- `screenshots/af004-remediation-tests-evidence.png`
- `screenshots/af004-after-api-response-evidence.png`
- `screenshots/af004-zap-validation-evidence.png`

