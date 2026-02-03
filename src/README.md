# Source Folder Overview

This folder contains the frontend application source for ARKA NEXUS. It follows a feature first structure with shared infrastructure in `core/` and reusable UI in `shared/`.

## Entry Points

- `main.tsx` boots the React app and mounts to the DOM.
- `index.css` is the global stylesheet entry.
- `app/App.tsx` is the top level app component.
- `app/providers.tsx` wires app level providers.
- `app/routes.tsx` defines route configuration.

## Top Level Folders

- `app/` app shell, providers, and route definitions.
- `assets/` static assets imported by the app (docs, images, videos).
- `core/` cross cutting infrastructure and services.
- `modules/` domain features grouped by page or business area.
- `shared/` reusable components and layout building blocks.
- `styles/` global styles and design tokens.

## `core/`

- `config/` external service configuration (EmailJS, Sanity).
- `hooks/` shared hooks that are not tied to a single feature.
- `routing/` router helpers (example: `ScrollToTop.tsx`).
- `services/` integrations and data access.
- `utils/` cross cutting utilities.

### `core/services/`

- `client.ts` shared API client setup.
- `email/` EmailJS service and types.
- `sanity/` Sanity services and GROQ queries in `sanity/queries/`.

## `modules/`

Each module represents a feature or page group (home, about, services, etc). Common subfolders:

- `content/` static content or local copy.
- `pages/` route level page components.
- `providers/` data composition for the module.
- `sections/` UI sections used by pages.
- `hooks/` module specific hooks (when needed).
- `config/` module configuration and maps (services module).
- `templates/` reusable templates (services module).
- `skeleton/` loading skeletons (services, snapshots).

### Note on `modules/services/`

The services module is intentionally more complex because it supports:
- Multiple service types
- Shared templates
- CMS-driven configuration
- Page-level skeletons

This complexity is by design and should not be flattened or merged into other modules.

### Note on Loading & Skeleton Strategy

Skeletons are implemented at the **page level**, not inside individual components.

Rules:
- Skeleton layout should closely match the real page layout
- Avoid layout shift (CLS)
- Use shared skeleton primitives where possible

## `shared/`

- `components/` reusable UI components (header, footer, contact, background).
- `layout/` app layout wrappers.
- `not-found/` 404 page.
- `ui/` small shared UI primitives and skeletons.

## `styles/`

- `globals.css` global styles.
- `tailwind.tokens.ts` design tokens and theme values.

## Data Flow Convention

Services and data access live in `core/` or module `config/`. UI should consume data via hooks and providers.

`services -> providers -> hooks -> pages/sections`

## Adding A New Feature

1. Create a module in `modules/your-feature/`.
2. Add route in `app/routes.tsx`.
3. Add providers, hooks, sections as needed.
4. Add static assets under `assets/` if required.

## Things Should NOT Do

- Do not fetch Sanity data directly inside `sections/` or UI components.
- Do not add new routes by bypassing `app/routes.tsx`.
- Do not place feature-specific logic inside `shared/`.
- Do not edit `dist/` files manually.
- Do not store credentials or secrets inside the repo.
