resource "random_id" "suffix" {
  byte_length = 3
}

locals {
  name_suffix = random_id.suffix.hex

  resource_group_name   = "${var.resource_group_name_prefix}-${local.name_suffix}"
  app_service_plan_name = "${var.app_service_plan_name_prefix}-${local.name_suffix}"
  web_app_name          = "${var.web_app_name_prefix}-${local.name_suffix}"

  merged_tags = merge(var.tags, {
    project     = "appsec-crash-lab"
    owner       = "james"
    purpose     = "interview-prep"
    environment = "lab"
  })
}

# Resource group for all lab resources so the environment can be created and destroyed cleanly.
resource "azurerm_resource_group" "lab" {
  name     = local.resource_group_name
  location = var.location
  tags     = local.merged_tags
}

# Low-cost Linux App Service plan for the lab application.
resource "azurerm_service_plan" "lab" {
  name                = local.app_service_plan_name
  resource_group_name = azurerm_resource_group.lab.name
  location            = azurerm_resource_group.lab.location
  os_type             = "Linux"
  sku_name            = "B1"
  tags                = local.merged_tags
}

# Linux Web App where the intentionally vulnerable training app will run in the next phase.
resource "azurerm_linux_web_app" "lab" {
  name                = local.web_app_name
  resource_group_name = azurerm_resource_group.lab.name
  location            = azurerm_resource_group.lab.location
  service_plan_id     = azurerm_service_plan.lab.id
  enabled             = !var.pause_lab
  https_only          = true
  tags                = local.merged_tags

  site_config {
    always_on = false

    application_stack {
      node_version = "20-lts"
    }
  }

  app_settings = {
    NODE_ENV                       = "production"
    WEBSITES_PORT                  = "3000"
    SCM_DO_BUILD_DURING_DEPLOYMENT = "true"
    APP_LAB_MODE                   = "training"
    APP_PROJECT_NAME               = var.project_name
  }
}