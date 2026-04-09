# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Alpha Series is a simplified web application for following TV shows using the BetaSeries API. Built with SvelteKit, it's a Progressive Web App (PWA) deployed to GitHub Pages at https://kpanot.github.io/alphaserie/.

## Monorepo Structure

This is a Yarn workspaces monorepo with two main workspaces:

- **app/**: SvelteKit application (the main web app)
- **sdk/betaseries/**: Auto-generated TypeScript SDK for BetaSeries API

## Development Commands

### Getting Started

```bash
# Enable corepack for Yarn 4
corepack enable

# Install dependencies
yarn install

# Create app/.env.local with your BetaSeries API credentials:
# VITE_CLIENT_ID=<Your Client ID>
# VITE_CLIENT_SECRET=<Your Client Secret>
# VITE_REDIRECT_URI=http://localhost:5173/
```

Request API credentials from https://www.betaseries.com/compte/api

### Running the Application

```bash
# Start dev server (runs app workspace)
yarn start
# Or explicitly:
yarn workspace app dev
```

### Building

```bash
# Build all workspaces (topological order)
yarn build

# Build app only
yarn workspace app build

# Build SDK only
yarn workspace sdk build
```

### Linting and Type Checking

```bash
# Lint app
yarn workspace app lint

# Type check with Svelte
yarn workspace app check

# Watch mode for type checking
yarn workspace app check:watch

# Lint SDK
yarn workspace sdk lint
```

### SDK Commands

```bash
# Regenerate SDK from OpenAPI spec
cd sdk/betaseries
yarn spec:regen

# Run SDK tests
yarn workspace sdk test

# Start SDK in watch mode
yarn workspace sdk start
```

## Architecture

### Application Structure (app/)

- **src/routes/**: SvelteKit file-based routing
  - `+page.svelte`: Main page
  - `+layout.svelte`: Root layout
  - `components/`: Shared components organized by feature
    - `group/`: Show grouping components
      - `current/`: Components for current/ongoing shows
      - `archive/`: Components for archived shows
      - `search/`: Search results group
        - `GroupSearch.svelte`: Search results when filter produces no results (400ms debounced)
      - `GroupItem.svelte`: Reusable group container
    - `search/`: Search functionality components
- **src/lib/**: Shared library code
  - `store/`: Svelte stores for state management (planning, search, show, member)
  - `environment.ts`: Environment configuration
- **static/**: Static assets (favicon, etc.)

### SDK Structure (sdk/betaseries/)

The SDK is **auto-generated** from the BetaSeries OpenAPI specification (`spec.json`) using `@ama-sdk/schematics`:

- **src/api/**: Generated API client methods organized by resource (authentication, episodes, members, planning, shows, etc.)
- **src/models/base/**: Generated TypeScript models from OpenAPI definitions
- **src/helpers/**: Custom helper functions for data transformation
- **src/models/custom/**: Custom models and extensions
- **src/plugins/**: SDK plugins

**Do not manually edit generated files** in `src/api/` or `src/models/base/`. Instead:
- Add custom code to `src/helpers/` or `src/models/custom/`
- To extend a base model, redirect the export in `src/models/base/<model>/index.ts` to your custom model

### Key Configuration

**Aliases** (defined in `svelte.config.js`):
- `sdk` → `../sdk/betaseries/src` (direct access to SDK source)
- `store` → `./src/lib/store` (easy store imports)

**Adapter**: Uses `@sveltejs/adapter-static` for GitHub Pages deployment with fallback to `index.html` for SPA routing.

**PWA**: Integrated via `@vite-pwa/sveltekit` for offline capability.

**SSR Configuration**: `@ama-sdk/core` is marked as `noExternal` in vite.config.ts to ensure proper SSR bundling.

**Environment Variables**:
- `VITE_CLIENT_ID`: BetaSeries API Client ID
- `VITE_CLIENT_SECRET`: BetaSeries API Client Secret
- `VITE_REDIRECT_URI`: OAuth redirect URI
- `BASE_PATH`: Base path for deployment (set to `/alphaserie` for GitHub Pages)

### Deployment

Deployment is automated via GitHub Actions (`.github/workflows/page.yml`):
- Triggers on push to `main` branch
- Builds with `BASE_PATH=/alphaserie`
- Deploys `app/build/` to GitHub Pages
- Requires secrets: `CLIENT_ID`, `CLIENT_SECRET`, `BS_API_KEY`

## Tech Stack

- **SvelteKit**: Application framework
- **TypeScript**: Type safety
- **TanStack Query (@tanstack/svelte-query)**: Data fetching and caching
- **Tailwind CSS**: Styling with DaisyUI component library
- **DaisyUI**: Component library built on Tailwind CSS
- **Heroicons**: Icon library (via svelte-hero-icons)
- **@ama-sdk/core**: SDK framework for API client generation
- **Vite**: Build tool and dev server

## Code Conventions

- ESLint configuration extends: `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `plugin:svelte/recommended`
- `@typescript-eslint/no-explicit-any` is set to `warn` (not error)
- Use `.svelte` files for components, `.ts` for TypeScript modules

## Important Notes

- The SDK is version-controlled but can be regenerated. After updating `spec.json`, run `yarn workspace sdk spec:regen`.
- When working with API endpoints, refer to the generated SDK in `sdk/betaseries/src/api/` rather than making raw HTTP calls.
- The application uses SvelteKit stores for state management - check `src/lib/store/` before creating new global state.
- Component organization follows feature-based grouping (current shows, archived shows, search, etc.).
