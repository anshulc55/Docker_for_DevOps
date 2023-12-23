# app.py
import os

app_version = os.environ.get('APP_VERSION', 'Unknown')
environment = os.environ.get('ENVIRONMENT', 'Unknown')

print(f"Running App version {app_version} in {environment} environment.")