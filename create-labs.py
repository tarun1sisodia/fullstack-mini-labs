#!/usr/bin/env python3
# ==================================================
# 🚀 Fullstack Mini Labs — Folder Structure Creator
# Creates the complete project structure for:
# https://github.com/your-username/fullstack-mini-labs
#
# ✅ Works on any OS with Python 3.6+
# ✅ No external dependencies
# ✅ Clean output with progress feedback
# ==================================================

import os
import sys
import subprocess

def main():
    print("🚀 Initializing fullstack-mini-labs project structure...")

    # Root directory
    ROOT = "fullstack-mini-labs"

    try:
        # Create root
        os.makedirs(ROOT, exist_ok=True)
        os.chdir(ROOT)
        print("📁 Root folder created:", ROOT)

        # Create top-level files
        for filename in ["README.md", "LICENSE"]:
            open(filename, 'a').close()
        print("📄 Created: README.md, LICENSE")

        # Lab folder names
        labs = [
            "01-hello-server",
            "02-static-api",
            "03-mongodb-connect",
            "04-crud-todos-create-read",
            "05-crud-todos-update-delete",
            "06-project-structure-refactor",
            "07-supabase-auth-signup-login",
            "08-protect-routes-jwt",
            "09-user-specific-todos",
            "10-logout-token-blacklist",
            "11-cors-setup-flutter-web",
            "12-flutter-todo-app-minimal",
            "13-flutter-add-toggle-delete",
            "14-profile-endpoint-user-info",
            "15-file-upload-avatar",
            "16-export-todos-csv-pandas",
            "17-todo-analytics-numpy-pandas",
            "18-webhook-notify-new-todo",
            "19-deploy-to-render-vercel",
            "20-ci-cd-github-actions"
        ]

        # Create labs directory
        os.makedirs("labs", exist_ok=True)
        print("🧪 Creating 20 lab folders...")

        for lab in labs:
            os.makedirs(f"labs/{lab}", exist_ok=True)
            print(f"   → Created {lab}")

        # Create templates and docs
        os.makedirs("templates/nodejs-starter-template", exist_ok=True)
        print("🧱 Created template: templates/nodejs-starter-template")

        os.makedirs("docs", exist_ok=True)
        open("docs/learnings.md", 'a').close()
        print("📒 Created journal: docs/learnings.md")

        # Try to initialize git
        try:
            subprocess.run(["git", "init"], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            print("🔧 Initialized git repository.")
        except (subprocess.CalledProcessError, FileNotFoundError):
            print("⚠️  Git not found or failed to initialize (optional).")

        print()
        print("✅ SUCCESS! Folder structure generated.")
        print()
        print("📁 Navigate: cd fullstack-mini-labs")
        print("📖 Paste the README content into README.md")
        print("🧪 Start with Lab 1: labs/01-hello-server")
        print()
        print("Happy coding! 🚀🐍📱")

    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()