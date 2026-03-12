# Marketing Platform Test – pnpm + Turborepo Monorepo

A proof-of-concept monorepo with **5 Next.js apps** and **4 shared packages**, used to validate the setup and developer workflow.

## Tech stack

- **Package manager:** pnpm
- **Orchestrator:** Turborepo
- **Apps:** Next.js 15 (App Router), TypeScript
- **Linting:** ESLint
- **Formatting:** Prettier

## Repository structure

```
apps/
  site-a/   # Baseline marketing site
  site-b/   # Forms/validation (zod, react-hook-form)
  site-c/   # Content (date-fns, clsx)
  site-d/   # Analytics (uuid, @platform/analytics)
  site-e/   # API/data (axios, swr)
packages/
  ui/       # @platform/ui – Button, Card, Section, PageHeader
  analytics/# @platform/analytics – track(), identify()
  config/   # @platform/config – constants, feature flags
  utils/    # @platform/utils – formatTitle, slugify, isExternalUrl
```

## Setup

**Prerequisites:** Node.js 18+, pnpm 9+

```bash
# Install dependencies (from repo root)
pnpm install
```

## Scripts

| Command | Description |
|--------|-------------|
| `pnpm dev` | Run all apps in dev mode (parallel) |
| `pnpm build` | Build all packages and apps (dependency-aware) |
| `pnpm lint` | Lint all workspaces |
| `pnpm typecheck` | Type-check all workspaces |
| `pnpm test` | Run tests (placeholder per app/package) |

### Run a single app

```bash
# Development
pnpm --filter site-a dev    # site-a on http://localhost:3001
pnpm --filter site-b dev    # site-b on http://localhost:3002
pnpm --filter site-c dev    # site-c on http://localhost:3003
pnpm --filter site-d dev    # site-d on http://localhost:3004
pnpm --filter site-e dev    # site-e on http://localhost:3005

# Build one app
pnpm --filter site-a build
```

### Build a single package

```bash
pnpm --filter @platform/ui build
pnpm --filter @platform/utils build
```

## Internal packages

- **@platform/ui** – Shared React components (Button, Card, Section, PageHeader). Used by all apps.
- **@platform/analytics** – `track(eventName, payload)` and `identify(userId, traits)`. Console logging for now; can be swapped for Segment/GTM/GA later.
- **@platform/config** – `PLATFORM_NAME`, `DEFAULT_LOCALE`, `FEATURE_FLAGS`.
- **@platform/utils** – `formatTitle`, `slugify`, `isExternalUrl`.

All internal deps use `workspace:*` in each app’s `package.json`.

## Ports

| App   | Dev port |
|-------|----------|
| site-a | 3001 |
| site-b | 3002 |
| site-c | 3003 |
| site-d | 3004 |
| site-e | 3005 |

## Adding tests later

The structure supports adding Playwright (e2e) and unit tests later. Each app/package has a `test` script (currently a no-op); you can replace it with `playwright test` or `vitest` etc.
