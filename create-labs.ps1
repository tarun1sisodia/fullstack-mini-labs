# ==================================================
# 🚀 Fullstack Mini Labs — Folder Structure Creator
# Creates the complete project structure for:
# https://github.com/your-username/fullstack-mini-labs
#
# ✅ Tested on Windows PowerShell 5.1+
# ✅ Clean, readable, safe execution
# ✅ Progress feedback with emoji
# ==================================================

Write-Host "🚀 Initializing fullstack-mini-labs project structure..." -ForegroundColor Cyan

# Create root directory
$root = "fullstack-mini-labs"
New-Item -ItemType Directory -Path $root -Force | Out-Null
Set-Location $root -ErrorAction Stop
Write-Host "📁 Root folder created: $root" -ForegroundColor Green

# Create essential top-level files
New-Item -ItemType File -Path "README.md", "LICENSE" -Force | Out-Null
Write-Host "📄 Created: README.md, LICENSE" -ForegroundColor Gray

# Define all lab names
$labs = @(
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
)

# Create labs directory and subfolders
New-Item -ItemType Directory -Path "labs" -Force | Out-Null
Write-Host "🧪 Creating 20 lab folders..." -ForegroundColor Yellow

foreach ($lab in $labs) {
    New-Item -ItemType Directory -Path "labs/$lab" -Force | Out-Null
    Write-Host "   → Created $lab" -ForegroundColor DarkGray
}

# Create templates and docs structure
New-Item -ItemType Directory -Path "templates/nodejs-starter-template" -Force | Out-Null
Write-Host "🧱 Created template: templates/nodejs-starter-template" -ForegroundColor Gray

New-Item -ItemType Directory -Path "docs" -Force | Out-Null
New-Item -ItemType File -Path "docs/learnings.md" -Force | Out-Null
Write-Host "📒 Created journal: docs/learnings.md" -ForegroundColor Gray

# Initialize git repo (optional, silent)
try {
    git init 2>&1 | Out-Null
    Write-Host "🔧 Initialized git repository." -ForegroundColor Gray
} catch {
    Write-Host "⚠️  Git not found or failed to initialize (optional)." -ForegroundColor Red
}

Write-Host ""
Write-Host "✅ SUCCESS! Folder structure generated." -ForegroundColor Green
Write-Host ""
Write-Host "📁 Navigate: cd fullstack-mini-labs" -ForegroundColor White
Write-Host "📖 Paste the README content into README.md" -ForegroundColor White
Write-Host "🧪 Start with Lab 1: labs/01-hello-server" -ForegroundColor White
Write-Host ""
Write-Host "Happy coding! 🚀🐍📱" -ForegroundColor Magenta