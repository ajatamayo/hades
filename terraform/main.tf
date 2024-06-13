variable "namecheap_username" {}
variable "namecheap_api_key" {}
variable "master_billing_account" {}

provider "google" {
  project = "hades-426108"
  region  = "us-central1"
}

resource "google_billing_subaccount" "subaccount" {
  display_name           = "Hades"
  master_billing_account = var.master_billing_account
}

resource "google_service_account" "main_sa" {
  account_id   = "main-sa"
  display_name = "Main SA"
}

resource "google_storage_bucket" "static_site" {
  name     = "hades-website"
  location = "US"

  force_destroy = true
  storage_class = "STANDARD"

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }

  cors {
    origin          = ["*"]
    method          = ["GET"]
    max_age_seconds = 3600
  }
}

resource "google_storage_bucket_iam_binding" "public_access" {
  bucket = google_storage_bucket.static_site.name

  role = "roles/storage.objectViewer"

  members = [
    "allUsers"
  ]
}

resource "google_project_service" "secrets_manager" {
  service = "secretmanager.googleapis.com"
}

resource "google_secret_manager_secret" "namecheap" {
  secret_id = "credentials"
  replication {
    auto {}
  }
}

resource "google_secret_manager_secret_version" "credentials" {
  secret = google_secret_manager_secret.namecheap.secret_id
  secret_data = jsonencode({
    username = var.namecheap_username,
    api_key  = var.namecheap_api_key
  })
}

resource "google_secret_manager_secret" "google" {
  secret_id = "credentials"
  replication {
    auto {}
  }
}
resource "google_secret_manager_secret_version" "billing" {
  secret = google_secret_manager_secret.google.secret_id
  secret_data = jsonencode({
    master_billing_account = var.master_billing_account
  })
}

provider "namecheap" {
  api_user  = var.namecheap_username
  api_key   = var.namecheap_api_key
  user_name = var.namecheap_username
}

resource "namecheap_domain_records" "subdomain" {
  domain = "atamayo.io"
  mode   = "OVERWRITE"

  record {
    hostname = "hades"
    type     = "A"
    address  = google_storage_bucket.static_site.name
  }
}
