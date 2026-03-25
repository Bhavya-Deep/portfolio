# 🚀 MERN + TypeScript Full Stack Portfolio — Project Structure & Setup

## Folder Structure

```
portfolio/
├── client/                         # Frontend (React + Vite + TypeScript)
│   ├── public/
│   │   ├── robots.txt
│   │   └── favicon.svg
│   ├── src/
│   │   ├── assets/                 # Images, fonts, static files
│   │   │   └── hero-portrait.webp
│   │   ├── components/             # Reusable UI components
│   │   │   ├── ui/                 # Shadcn/Radix primitives
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── SmoothScroll.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsMarquee.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── lib/                    # Utilities (cn, api client)
│   │   ├── pages/                  # Route-level pages
│   │   │   ├── Index.tsx
│   │   │   └── NotFound.tsx
│   │   ├── styles/
│   │   │   └── index.css           # Design system tokens
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── index.html
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── package.json
│
├── server/                         # Backend (Node.js + Express + TypeScript)
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.ts               # MongoDB/PostgreSQL connection
│   │   │   └── env.ts              # Environment variables validation
│   │   ├── controllers/
│   │   │   ├── contact.controller.ts
│   │   │   └── project.controller.ts
│   │   ├── middleware/
│   │   │   ├── errorHandler.ts
│   │   │   ├── rateLimiter.ts
│   │   │   └── validate.ts
│   │   ├── models/
│   │   │   ├── Contact.ts          # Mongoose/Prisma model
│   │   │   └── Project.ts
│   │   ├── routes/
│   │   │   ├── contact.routes.ts
│   │   │   └── project.routes.ts
│   │   ├── services/
│   │   │   ├── email.service.ts    # Nodemailer / Resend
│   │   │   └── project.service.ts
│   │   ├── types/
│   │   │   └── index.ts            # Shared TypeScript types
│   │   ├── utils/
│   │   │   └── logger.ts
│   │   └── server.ts               # Express app entry point
│   ├── tsconfig.json
│   └── package.json
│
├── shared/                         # Shared types between client & server
│   └── types/
│       ├── contact.ts
│       └── project.ts
│
├── .env.example
├── .gitignore
├── docker-compose.yml              # Optional: MongoDB + Redis
└── README.md
```

---

## 🛠 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or pnpm
- MongoDB (local or Atlas) OR PostgreSQL
- Git

---

### 1. Frontend Setup (`client/`)

```bash
cd client

# Install dependencies
npm install

# Core
npm i react react-dom react-router-dom @tanstack/react-query

# Animation & Scroll
npm i framer-motion lenis gsap

# UI & Styling
npm i tailwindcss postcss autoprefixer tailwindcss-animate
npm i class-variance-authority clsx tailwind-merge
npm i lucide-react sonner

# Dev
npm i -D typescript @types/react @types/react-dom
npm i -D vite @vitejs/plugin-react-swc
npm i -D eslint typescript-eslint

# Start dev server
npm run dev
```

### 2. Backend Setup (`server/`)

```bash
cd server

# Initialize
npm init -y

# Core
npm i express cors dotenv helmet morgan
npm i mongoose           # if using MongoDB
# npm i prisma @prisma/client  # if using PostgreSQL

# Email (pick one)
npm i nodemailer         # or: npm i resend

# Validation
npm i zod express-rate-limit

# Dev
npm i -D typescript @types/express @types/cors @types/node
npm i -D tsx nodemon     # tsx for running TS directly
npm i -D eslint

# TypeScript config
npx tsc --init

# Start dev server
npx tsx watch src/server.ts
```

### 3. Environment Variables (`.env`)

```env
# Server
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
# or DATABASE_URL=postgresql://...

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your-app-password

# Client
VITE_API_URL=http://localhost:5000/api
```

### 4. Server Entry Point (`server/src/server.ts`)

```typescript
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import contactRoutes from "./routes/contact.routes";
import projectRoutes from "./routes/project.routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// Error handling
app.use(errorHandler);

// Start
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
```

---

## 📦 Key Packages Summary

| Category | Package | Purpose |
|----------|---------|---------|
| **Animation** | `framer-motion` | React animation library |
| **Animation** | `gsap` | High-perf timeline animations |
| **Scroll** | `lenis` | Smooth scroll experience |
| **Styling** | `tailwindcss` | Utility-first CSS |
| **UI** | `shadcn/ui` | Component primitives |
| **Backend** | `express` | HTTP server |
| **DB** | `mongoose` / `prisma` | Database ORM |
| **Validation** | `zod` | Schema validation |
| **Email** | `nodemailer` / `resend` | Transactional emails |

---

## 🏃 Running the Full Stack

```bash
# Terminal 1 — Frontend
cd client && npm run dev

# Terminal 2 — Backend
cd server && npx tsx watch src/server.ts

# Or use concurrently:
npm i -D concurrently
# In root package.json:
# "dev": "concurrently \"cd client && npm run dev\" \"cd server && npx tsx watch src/server.ts\""
```

---

**Note:** This Lovable project contains the complete frontend. To add the backend, create the `server/` folder separately and connect via API calls using the `VITE_API_URL` environment variable.
