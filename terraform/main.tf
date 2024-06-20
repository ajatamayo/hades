variable "master_billing_account" {}

provider "google" {
  project = "hades-426108"
  region  = "us-central1"
}

resource "google_billing_project_info" "project_billing" {
  billing_account = var.master_billing_account
}

resource "google_service_account" "main_sa" {
  account_id   = "main-sa"
  display_name = "Main SA"
}

resource "google_storage_bucket_iam_member" "bucket_iam" {
  bucket = google_storage_bucket.static_site.name
  role   = "roles/storage.objectCreator"
  member = "serviceAccount:main-sa@hades-426108.iam.gserviceaccount.com"
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
