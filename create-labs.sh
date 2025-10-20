#!/bin/bash

# ==================================================
# 🚀 Fullstack Mini Labs — Folder Structure Creator
# Creates the complete project structure for:
# https://github.com/your-username/fullstack-mini-labs
#
# ✅ Tested on macOS, Ubuntu, WSL
# ✅ No brace expansion errors
# ✅ Clean output with progress feedback
# ==================================================

echo "🚀 Initializing fullstack-mini-labs project structure..."

# Create root directory
mkdir -p fullstack-mini-labs
cd fullstack-mini-labs || { echo "❌ Failed to enter directory"; exit 1; }

echo "📁 Root folder created: fullstack-mini-labs"

# Create essential top-level files
touch README.md LICENSE
echo "📄 Created: README.md, LICENSE"

# Define all lab names as an array (safe, readable, portable)
labs=(
  "01-hello-server"
  "02-static-api"
  "03-mongodb-connect"
  "04-crud-todos-create-read"
  "05-crud-todos-update-delete"
  "06-project-structure-refactor"
  "07-supabase-auth-signup-login"
  "08-protect-routes-jwt"
  "09-user-specific-todos"
  "10-logout-token-blacklist"
  "11-cors-setup-flutter-web"
  "12-flutter-todo-app-minimal"
  "13-flutter-add-toggle-delete"
  "14-profile-endpoint-user-info"
  "15-file-upload-avatar"
  "16-export-todos-csv-pandas"
  "17-todo-analytics-numpy-pandas"
  "18-webhook-notify-new-todo"
  "19-deploy-to-render-vercel"
  "20-ci-cd-github-actions"
)

# Create labs directory and subfolders
mkdir -p labs
echo "🧪 Creating 20 lab folders..."

for lab in "${labs[@]}"; do
    mkdir -p "labs/$lab"
    echo "   → Created $lab"
done

# Create templates and docs structure
mkdir -p templates/nodejs-starter-template
echo "🧱 Created template: templates/nodejs-starter-template"

mkdir -p docs
touch docs/learnings.md
echo "📒 Created journal: docs/learnings.md"

# Initialize git repo (optional, silent)
git init > /dev/null 2>&1 && echo "🔧 Initialized git repository."

echo ""
echo "✅ SUCCESS! Folder structure generated."
echo ""
echo "📁 Navigate: cd fullstack-mini-labs"
echo "📖 Paste the README content into README.md"
echo "🧪 Start with Lab 1: labs/01-hello-server"
echo ""
echo "Happy coding! 🚀🐍📱"