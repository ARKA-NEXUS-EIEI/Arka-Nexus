# ARKA NEXUS - Frontend Application

**Developer Documentation**

---

## 1. Project Overview

**ARKA NEXUS** is a corporate website developed as a **modern, scalable frontend application** with a strong focus on:

- Clean architecture
- CMS-driven content (Sanity)
- Long-term maintainability
- Easy handover to new developers

This project represents **Version 2 (v2)** of the ARKA NEXUS website.
Instead of incrementally patching v1, the frontend was **redesigned and rebuilt** with industry-standard practices.

---

## 2. Purpose of This Repository

This repository contains the **frontend source code** of the ARKA NEXUS website.

It is responsible for:

- UI rendering
- Routing
- Animations and interactions
- Fetching content from Sanity CMS
- Sending emails via EmailJS
- Producing a static production build (`dist/`) for deployment

It does **not** contain:

- Backend servers
- Databases
- Authentication logic
- CMS schemas (those live in a separate Sanity repo)

---

## 3. Technology Stack

### Core

- **React 18** - UI framework
- **TypeScript** - Type safety and maintainability
- **Vite** - Fast development server and production bundler

### Styling & UI

- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **CSS Modules / Global CSS** - Minimal legacy usage

### CMS & Data

- **Sanity CMS** - Headless content management
- **GROQ** - Query language for Sanity

### Utilities & Services

- **EmailJS** - Contact form email delivery (frontend-only)
- **Intersection Observer** - Scroll-based animations
- **Masonry layout (CSS-based)** - Snapshots gallery

### Tooling

- **ESLint** - Code quality checks (non-blocking on main branch)
- **Prettier** - Code formatting
- **PostCSS** - Tailwind processing

---

## 4. High-Level Architecture

The frontend follows **strict separation of concerns**.

```
UI (TSX)
 ->
Hooks
 ->
Providers
 ->
Services (Sanity / Email / Config)
```

### Golden Rules (Enforced)

- No Sanity logic inside UI components
- No JSX inside content or service files
- No direct data fetching inside sections
- UI components only render props
- All external data flows through hooks

This ensures:

- CMS changes do not break UI
- UI refactors do not affect content
- Easy future migration to another CMS if required

---

## 5. Folder Structure (High Level)

```
src/
|-- app/         # App shell, providers, and routes
|-- assets/      # Static assets (docs, images, videos)
|-- core/        # Cross-cutting infrastructure
|-- modules/     # Domain-based features (Home, About, Services, etc.)
|-- shared/      # Reusable UI components
|-- styles/      # Global styles and tokens
```

Each folder has a **specific responsibility**, explained in detail in `src/README.md`.

---

## 6. Environment & Configuration

### Required Environment Variables (not committed)

These live in `.env` (not included in repo):

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

**Never commit `.env` files**
Company-owned credentials should always use **company email IDs**

---

## 7. Local Development Setup

```bash
npm install
npm run dev
```

- Runs on a local Vite dev server
- Uses Sanity CDN for content
- No backend required

---

## 8. Production Build

```bash
npm run build
```

This generates the `dist/` folder:

- Fully static
- Ready for deployment
- Optimized and minified

Deployment is done by uploading `dist/` contents to hosting (GoDaddy / cPanel).

---

## 9. Deployment Model (Important)

- **Static hosting**
- **No server-side rendering**
- **No serverless functions**
- **Apache-based SPA routing** via `.htaccess`

This design was chosen specifically for **GoDaddy shared hosting compatibility**.

---

## 10. CMS Boundary (Sanity)

Sanity is:

- A **separate repository**
- A **separate deployment**
- Owned and managed independently

Frontend:

- Only reads data
- Never writes to Sanity
- Never contains schema logic

This separation is intentional and critical for long-term stability.

---

## 11. Contribution Guidelines

For new developers:

- Follow existing folder patterns
- Do not fetch data directly inside components
- Always create `service.ts` -> `hook.ts` -> `page.tsx`
- Do not introduce new global styles unless necessary
- Prefer Tailwind utilities over custom CSS

---

## 12. Common Pitfalls (Read Carefully)

- Do not edit `dist/` manually
- Do not hardcode content in TSX if it belongs to CMS
- Do not move shared components into modules casually
- Do not use personal email accounts for integrations
