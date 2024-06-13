terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.33.0"
    }
    namecheap = {
      source  = "namecheap/namecheap"
      version = ">= 2.1.2"
    }
  }
}
