# Platform Test – pnpm + Turborepo Monorepo

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

## CI (GitHub Actions)

Workflow: `.github/workflows/tests.yml` runs **unit tests** (Vitest) and **e2e** (Playwright + Turborepo) per app.

### Turborepo cache on CI

1. **Local cache on the runner (no secrets)**
   The workflow restores/saves **`.turbo/cache`** with `actions/cache`, keyed by `pnpm-lock.yaml`, `turbo.json`, and root `package.json` / `tsconfig.base.json`. That speeds up repeated CI runs on the same branch/repo.

2. **Remote cache (optional, Vercel)**
   Add repository secrets **`TURBO_TOKEN`** and **`TURBO_TEAM`** (your Vercel team slug). When set, Turbo uploads/downloads cache across runs and machines. If unset, only the local `.turbo/cache` (and per-job GHA cache) applies.

## Tests

- **E2E:** `pnpm turbo run test --filter=site-a` (Playwright; `test` script per app).
- **Unit:** `pnpm --filter site-a test:unit` (Vitest + React Testing Library).

## Test run instructions

### Unit tests (Vitest)

Run one app:
```bash
pnpm --filter site-a test:unit
```

Run all apps (example):
```bash
pnpm --filter site-a test:unit
pnpm --filter site-b test:unit
pnpm --filter site-c test:unit
pnpm --filter site-d test:unit
pnpm --filter site-e test:unit
```

### E2E tests (Playwright)

Run one app:
```bash
pnpm turbo run test --filter=site-a
```

Run all apps (example):
```bash
pnpm turbo run test --filter=site-a --filter=site-b --filter=site-c --filter=site-d --filter=site-e
```
