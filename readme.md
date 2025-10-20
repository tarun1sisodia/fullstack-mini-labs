```markdown
# 🧪 Fullstack Mini Labs

> **20 bite-sized fullstack projects to master Node.js, MongoDB, Supabase Auth, Flutter integration, and data science basics — one lab at a time.**

Built with:
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)
- **Auth**: Supabase
- **Mobile**: Flutter
- **Data Science**: NumPy + Pandas (via Python scripts)
- **Deployment**: Render / Vercel / Heroku + GitHub Actions

## 📁 Repo Structure

This repo is organized to help you learn incrementally. After running the setup script, you’ll get:

fullstack-mini-labs/
├── README.md                  ← This file (you're here!)
├── LICENSE                    ← MIT or your preferred license
├── create-labs.sh             ← Generate structure (macOS/Linux)
├── create-labs.ps1            ← Windows PowerShell version
├── create_labs.py             ← Cross-platform Python version
├── labs/                      ← Each lab is a self-contained project
│   ├── 01-hello-server/
│   ├── 02-static-api/
│   ├── 03-mongodb-connect/
│   ├── 04-crud-todos-create-read/
│   ├── 05-crud-todos-update-delete/
│   ├── 06-project-structure-refactor/
│   ├── 07-supabase-auth-signup-login/
│   ├── 08-protect-routes-jwt/
│   ├── 09-user-specific-todos/
│   ├── 10-logout-token-blacklist/
│   ├── 11-cors-setup-flutter-web/
│   ├── 12-flutter-todo-app-minimal/
│   ├── 13-flutter-add-toggle-delete/
│   ├── 14-profile-endpoint-user-info/
│   ├── 15-file-upload-avatar/
│   ├── 16-export-todos-csv-pandas/
│   ├── 17-todo-analytics-numpy-pandas/
│   ├── 18-webhook-notify-new-todo/
│   ├── 19-deploy-to-render-vercel/
│   └── 20-ci-cd-github-actions/
├── templates/
│   └── nodejs-starter-template/     ← Reusable boilerplate after Lab 6
└── docs/
    └── learnings.md                 ← Your personal progress journal

---

## 🚀 Quick Setup

### Step 1: Clone or Download This Repo

```bash
git clone https://github.com/tarun1sisodia/fullstack-mini-labs.git
cd fullstack-mini-labs
```

> 💡 Or just download ZIP and extract.

### Step 2: Run Setup Script (Pick One)

#### macOS / Linux
```bash
chmod +x create-labs.sh
./create-labs.sh
```

#### Windows (PowerShell)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\create-labs.ps1
```

#### Any OS (Python 3+)
```bash
python create_labs.py
```

### Step 3: Start Coding!

```bash
cd fullstack-mini-labs
code .  # Opens in VS Code
```

> ✏️ **Don’t forget to paste your project description or goals into `README.md` inside each lab folder as you go!**

---

## 🧪 The 20 Mini Projects

Each lab introduces 1–2 new concepts. Build them in order for best results.

---

### 🔹 Phase 1: Backend & DB Basics

#### 1. `Hello Server`
- Create a basic Node.js server with Express.
- Return “Hello World” on `/`.
- Learn: `npm init`, `express`, `nodemon`.

#### 2. `Static JSON API`
- Serve static JSON data (e.g., list of books or todos) via GET `/api/items`.
- Learn: routing, sending JSON responses.

#### 3. `Connect to MongoDB (Local)`
- Set up MongoDB locally (or Atlas).
- Connect Node.js to MongoDB using Mongoose.
- Log “Connected to DB” on startup.
- Learn: `.env`, `mongoose.connect()`.

#### 4. `CRUD: Create & Read Todos`
- POST `/todos` → save todo to DB.
- GET `/todos` → fetch all todos.
- Schema: `{ text: String, done: Boolean }`.
- Learn: Mongoose models, async/await, body parsing.

#### 5. `CRUD: Update & Delete Todos`
- PUT `/todos/:id` → toggle `done`.
- DELETE `/todos/:id` → remove todo.
- Learn: route params, findByIdAndUpdate/Delete.

---

### 🔹 Phase 2: Auth & Structure

#### 6. `Project Structure Refactor`
- Reorganize Project 5 into `controllers/`, `models/`, `routes/`, `config/`.
- Use index.js for modular exports.
- Learn: scalable folder structure.

#### 7. `Add Supabase Auth (Signup/Login)`
- Integrate Supabase JS client.
- POST `/auth/signup` → create user in Supabase.
- POST `/auth/login` → return JWT.
- Learn: Supabase Auth APIs, environment secrets.

#### 8. `Protect Routes with JWT`
- Middleware: `verifyToken(req, res, next)`
- Protect `/todos` routes — only logged-in users can access.
- Learn: JWT verification, middleware flow.

#### 9. `User-Specific Todos`
- Attach `userId` (from JWT) to each todo.
- Only show todos belonging to logged-in user.
- Learn: `req.user.id`, relational thinking in NoSQL.

#### 10. `Logout & Token Blacklist (Simple)`
- POST `/auth/logout` → store token in-memory blacklist (array).
- Middleware checks if token is blacklisted.
- Learn: session invalidation, stateful auth on stateless system.

---

### 🔹 Phase 3: Flutter Integration & Real Apps

#### 11. `CORS Setup for Flutter/Web`
- Install `cors` middleware.
- Allow requests from `localhost:3000` (web) and Flutter dev ports.
- Test with Postman + Flutter HTTP client.

#### 12. `Flutter Todo App (Minimal)`
- Build a 1-screen Flutter app that:
  - Logs in via Supabase (email/password).
  - Fetches user’s todos from your Node backend.
  - Displays them in a ListView.
- Learn: `http` package, FutureBuilder, passing tokens.

#### 13. `Add, Toggle, Delete from Flutter`
- Add FAB → opens text field → POST to backend.
- Swipe to delete → calls DELETE endpoint.
- Checkbox → PUT to toggle status.
- Learn: state management (setState or Provider), optimistic UI.

#### 14. `Profile Endpoint + User Info`
- GET `/profile` → returns user info from Supabase (email, created_at).
- Display in Flutter app drawer/header.
- Learn: calling Supabase from backend, combining data sources.

#### 15. `File Upload (Avatar)`
- POST `/upload-avatar` → accepts image, stores in `uploads/` folder.
- Save path in user profile.
- Display avatar in Flutter app.
- Learn: `multer`, static file serving, Flutter Image.network/file.

---

### 🔹 Phase 4: Data Science + Advanced Features

#### 16. `Export Todos as CSV (Pandas)`
- GET `/export-todos-csv` → uses Pandas to convert user’s todos to CSV.
- Trigger from Flutter button → download via browser or save to device.
- Learn: `pandas.DataFrame`, `to_csv()`, Python child_process.

#### 17. `Todo Analytics Dashboard (NumPy/Pandas)`
- GET `/analytics` → returns:
  - Total todos, completed %, avg completion time (if timestamps added).
- Use NumPy for calculations, Pandas for grouping.
- Return as JSON → display in Flutter or simple HTML page.

#### 18. `Webhook: Notify on New Todo`
- POST `/webhooks/register` → save external URL.
- On every new todo → POST payload to registered webhook.
- Learn: outgoing HTTP requests (`axios`), async background tasks.

#### 19. `Deploy Backend to Render/Vercel/Heroku`
- Deploy your Node.js + MongoDB app.
- Update Flutter app to point to live URL.
- Learn: ENV vars in production, CORS config, debugging deployed apps.

#### 20. `Full CI/CD + GitHub Actions`
- Add `.github/workflows/deploy.yml`.
- Auto-deploy on push to `main`.
- Run tests (even if just linting placeholder).
- Learn: automation, workflows, separation of dev/prod.

---

## 🎯 What You’ll Gain After Completing All 20 Labs

✅ A reusable, modular backend template  
✅ Full authentication + user isolation  
✅ File uploads + external service integration  
✅ Flutter-integrated endpoints with real mobile UI  
✅ Data export & analytics using Pandas/NumPy  
✅ Production-ready deployment + CI/CD pipeline  

→ You’ll be ready to build **any fullstack app** — social, e-commerce, fitness, finance, SaaS — with confidence.

---

## 📘 Pro Tip: Keep a Learning Journal

Edit `docs/learnings.md` as you complete each lab:

```md
## Lab 01: Hello Server
- Learned how Express routing works.
- Used nodemon for auto-restart — huge QoL upgrade.
- Realized I need to understand middleware next.

## Lab 02: Static JSON API
- Got comfortable with res.json().
- Installed Postman — testing APIs is fun now!
...
```

This becomes your **personal developer journal** — invaluable for interviews and reflection 📖

---

## 🤝 Need Help?

Each lab is designed to be self-contained and beginner-friendly.

If you get stuck:
- Google the error + “Stack Overflow”
- Check official docs:
  - [Express](https://expressjs.com/)
  - [Mongoose](https://mongoosejs.com/)
  - [Supabase](https://supabase.com/docs)
  - [Flutter http](https://pub.dev/packages/http)
- Ask in GitHub Discussions or open an Issue
- DM me — I’ll help debug any step 😊

---

> “The expert in anything was once a beginner.”  
> Start small. Ship often. Stack skills.

**Happy Coding!** 🚀🐍📱

---

⭐ **Star this repo if you found it helpful!**  
📬 **PRs welcome** — fix typos, add tips, improve scripts!
```
Best Wishes,
Tarun