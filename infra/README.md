# Infrastructure

This folder contains the Terraform root module for the Azure AppSec lab.

## Prerequisites

- Azure CLI installed
- Terraform installed
- Access to an Azure subscription you are allowed to use for a personal lab

## Azure CLI Login

Before running Terraform, authenticate to Azure:

```bash
az login
```

If you have multiple subscriptions, select the one you want to use:

```bash
az account list -o table
az account set --subscription "<your-subscription-name-or-id>"
```

## Terraform Commands

Run these commands from the `infra` folder:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

Copy `terraform.tfvars.example` to `terraform.tfvars` and adjust values if needed.

## Destroy

When you are finished with the lab, remove the Azure resources with:

```bash
terraform destroy
```

This keeps the lab low-cost by removing the resource group, App Service plan, and App Service.