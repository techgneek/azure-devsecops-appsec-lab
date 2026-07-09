# Destroy

## How To Destroy Azure Resources

From the `infra/` directory run:

```bash
terraform destroy
```

Confirm the prompt and let Terraform remove the resource group, App Service Plan, and Web App.

## How To Verify Removal

- Re-run `terraform plan` and confirm there are no deployed resources left for the lab.
- Check the Azure portal or `az resource list` if you want to verify deletion manually.

## Cost Control

- Destroy the lab when you are finished using it.
- Avoid leaving the App Service running when you are not actively testing.
