<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# NexStock - Premium Inventory Management System
**Project Context & AI Agent Directives**

## 🏗️ Architecture & Tech Stack
- **Frontend Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling & UI**: Tailwind CSS v4, Framer Motion, GSAP, Recharts, Lucide React
- **Backend Framework**: Python, FastAPI (Async)
- **Database**: PostgreSQL with SQLAlchemy (ORM)
- **DevOps**: Fully Dockerized (Frontend & Backend containers with docker-compose). GitHub Actions CI/CD for automated testing and builds.

## 🎨 Design System & Aesthetics
This project strictly follows an **"OP Premium"** design language:
- **Core Aesthetic**: Deeply Immersive Neomorphism / Claymorphism.
- **Background**: Soft mid-tone cool slate (`#e2e8f0` for light mode, `#1e2024` for dark mode).
- **Shadows**: High-contrast, dual drop-shadows with extreme spread and inner inset shadows to create a thick, fluffy, 3D extruded silicone/clay feel (`.shadow-clay`, `.shadow-clay-pressed`).
- **Typography**: `Outfit` (Google Font) used globally for a geometric, modern, and highly premium SaaS vibe.
- **Interactions**: Extreme physical interactivity. Everything is draggable (`framer-motion` drag constraints). Everything bounces (`spring` physics with high stiffness and low damping).
- **Custom Cursor**: Custom physics-based trailing dot and expanding ring that wraps around interactive elements (`mix-blend-difference`).

## 📁 Directory Structure
- `src/app/`: Next.js App Router pages (`/`, `/products`, `/restock`, `/settings`, `/stealth`).
- `src/components/`: Reusable React components (`Sidebar.tsx`, `Header.tsx`, `StatCard.tsx`, `Modal.tsx`, `CustomCursor.tsx`).
- `backend/`: FastAPI backend containing `main.py`, `models.py`, `schemas.py`, `database.py`.
- `docker-compose.yml`: Root orchestrator for spinning up the full stack.

---

## 🚀 TO-DO LIST (Future Implementation)
When continuing work on this project, pick up from the following pending tasks:

### 1. API Integration (Crucial)
- [ ] Connect the Next.js frontend to the FastAPI backend.
- [ ] Replace dummy data in `/products` with `fetch()` calls to the FastAPI `/api/products` endpoint.
- [ ] Hook up the "Add Product" and "New Purchase Order" Modals to send `POST` requests to the database.

### 2. Backend Enhancements
- [ ] Add Alembic for PostgreSQL database migrations.
- [ ] Implement JWT Authentication in FastAPI to secure the API routes.
- [ ] Create detailed endpoints for tracking shipments and updating stock velocity.

### 3. Frontend Features
- [ ] Add NextAuth.js (Auth.js) to the frontend for user login/logout (connecting to FastAPI JWT).
- [ ] Build the `/analytics` page for deep diving into the Recharts data.
- [ ] Add toast notifications (e.g., `sonner` or `react-hot-toast`) for successful modal form submissions.
- [ ] Make the custom cursor dynamically change shape based on the *type* of element hovered (e.g., show an "Edit" pen icon when hovering a product row).

### 4. DevOps & Deployment
- [ ] Optimize the Dockerfile for production (multi-stage Next.js standalone build).
- [ ] Setup production environment variables (`.env.production`).
- [ ] Deploy the frontend to Vercel and the backend to a VPS or Render.
