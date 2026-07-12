variable "project_name" {
  description = "Short project name used in Azure resource naming."
  type        = string
  default     = "appsec-lab"
}

variable "location" {
  description = "Azure region where the lab resources will be deployed."
  type        = string
  default     = "westus2"
}

variable "resource_group_name_prefix" {
  description = "Prefix used for the Azure resource group name before the random suffix."
  type        = string
  default     = "rg-appsec-lab"
}

variable "app_service_plan_name_prefix" {
  description = "Prefix used for the Linux App Service plan name before the random suffix."
  type        = string
  default     = "asp-appsec-lab"
}

variable "web_app_name_prefix" {
  description = "Prefix used for the Linux Web App name before the random suffix."
  type        = string
  default     = "appsec-lab-web"
}

variable "tags" {
  description = "Base tags applied to all lab resources."
  type        = map(string)
  default = {
    project     = "appsec-crash-lab"
    owner       = "james"
    purpose     = "interview-prep"
    environment = "lab"
  }
}

variable "pause_lab" {
  description = "When true, disables the Web App (pause mode) without destroying resources."
  type        = bool
  default     = false
}
