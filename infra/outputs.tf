output "resource_group_name" {
  description = "Azure resource group name created for the lab."
  value       = azurerm_resource_group.lab.name
}

output "app_service_name" {
  description = "Azure Linux Web App name created for the lab."
  value       = azurerm_linux_web_app.lab.name
}

output "app_service_url" {
  description = "Default URL for the Azure App Service."
  value       = "https://${azurerm_linux_web_app.lab.default_hostname}"
}

output "azure_region" {
  description = "Azure region where the lab resources were deployed."
  value       = azurerm_resource_group.lab.location
}