# work-app

A bilingual (Thai/English) job-application form built with the Next.js App Router. The application currently ships a single form flow — "APPLICATION FOR EMPLOYMENT / ใบสมัครงาน" for **ZEGO GROUP** — covering personal, family, education, and work-experience information.

The project is frontend-only in its current state: there is no API layer, database, or authentication, and the form does not yet submit or persist data anywhere.

## Features

- Multi-section job application form: header/photo upload, personal information, family information, education history, and work experience.
- Repeatable rows for siblings and work experience entries, added/removed via local component state (`feature/job-application/components/family-information-from.tsx`, `working-information-from.tsx`).
- Cascading Thai address selector — province → amphoe (district) → tambon (subdistrict) → auto-filled zip code — backed by the offline `thailand-address` dataset (`components/ui/thai-address-select.tsx`).
- Custom date picker built on the native CSS anchor-positioning/`popover` APIs plus `react-day-picker` (`components/ui/date-picker.tsx`).
- A small DaisyUI-based set of reusable form primitives: button, input, select, checkbox, radio, table, card, combobox, image upload.
- Root route (`/`) redirects to `/job`, the only page currently implemented.

## Tech Stack

| Concern | Choice | Evidence |
| --- | --- | --- |
| Framework | Next.js 16.3.5 (App Router) | `next.config.ts`, `app/` directory, `package.json` |
| UI library | React 19.2.8 | `package.json` |
| Language | TypeScript 5 (strict mode) | `tsconfig.json` (`"strict": true`) |
| Styling | Tailwind CSS v4 + DaisyUI v5 | `app/globals.css`, `postcss.config.mjs` |
| Theming | `next-themes` | `providers/theme-provider.tsx`, `app/layout.tsx` |
| Dates | `react-day-picker` | `components/ui/date-picker.tsx` |
| Thai address data | `thailand-address` | `lib/thai-address.ts` |
| Linting | ESLint 9 (flat config) + `eslint-config-next` | `eslint.config.mjs` |
| Formatting | Prettier + `prettier-plugin-tailwindcss` | `.prettierrc` |

No database, ORM, authentication library, validation library, state-management library, or test framework is present in the project.

## Dependencies

### Runtime (`dependencies`)

| Package | Purpose in this project | Why it's used |
| --- | --- | --- |
| `next` | App Router, routing, layouts, `next/font/google` optimization, image config | Core framework the app is built on |
| `react`, `react-dom` | UI rendering | Required by Next.js |
| `next-themes` | Wrapped by `providers/theme-provider.tsx`, mounted in `app/layout.tsx` with `attribute="class"`, `defaultTheme="light"`, `enableSystem={false}` | Provides the theme-switching mechanism, though only one DaisyUI theme (`light`) is currently registered in `app/globals.css` |
| `clsx` | Used inside `lib/utils.ts`'s `cn()` helper to conditionally join class name strings | Used by nearly every component in `components/ui` |
| `tailwind-merge` | Used alongside `clsx` inside `cn()` to resolve conflicting Tailwind classes | Lets a caller's `className` override a component's default classes instead of both applying |
| `react-day-picker` | Renders the calendar UI inside `components/ui/date-picker.tsx` | Used for the birth-date and ID-card-expiration fields |
| `thailand-address` | Offline province/amphoe/tambon/zip-code dataset, wrapped by `lib/thai-address.ts` | Powers the cascading address dropdowns in `components/ui/thai-address-select.tsx` |
| `@heroicons/react` | Not imported anywhere in the source | Installed but currently not used |
| `class-variance-authority` | Not imported anywhere in the source | Installed but currently not used |

### Development (`devDependencies`)

| Package | Purpose |
| --- | --- |
| `typescript`, `@types/node`, `@types/react`, `@types/react-dom` | Static typing for Node, React, and the DOM |
| `tailwindcss`, `@tailwindcss/postcss` | Utility-first CSS, wired into the PostCSS pipeline in `postcss.config.mjs` |
| `daisyui` | Tailwind plugin registered in `app/globals.css` (`@plugin "daisyui"`); supplies the component class names (`btn`, `card`, `input`, `select`, `checkbox`, `radio`, `table`, `fieldset`, …) used throughout `components/ui` and `feature/job-application` |
| `eslint`, `eslint-config-next` | Linting via the flat-config format (`core-web-vitals` + `typescript` rule sets) |
| `prettier`, `prettier-plugin-tailwindcss` | Code formatting; the Tailwind plugin sorts class name strings into DaisyUI/Tailwind's recommended order |

## Architecture

The application has no backend layer. Everything runs client-side or as static/server-rendered React on top of the App Router:

```text
Browser
  ↓
Next.js App Router (app/)          — routing only
  ↓
Feature composition (feature/job-application)  — assembles one page from form sections
  ↓
Reusable UI primitives (components/ui, components/layout) — DaisyUI-styled, presentation-only
  ↓
Utilities (lib/)                   — cn() class merging, Thai address lookups
```

Interactive sections (`general-information-from.tsx`, `family-information-from.tsx`, `working-information-from.tsx`, `combobox.tsx`, `date-picker.tsx`, `thai-address-select.tsx`) are marked `"use client"` because they hold local state (`useState`/`useRef`). Static sections (`header-information.tsx`, `education-information-from.tsx`) have no client directive and render as Server Components.

## Folder Structure

```text
work-app/
├── app/
│   ├── (setup)/
│   │   └── page.tsx                     # "/" — redirects to /job
│   ├── (main)/
│   │   └── (routes)/
│   │       └── job/
│   │           └── page.tsx             # "/job" — composes the job application form
│   ├── layout.tsx                       # Root layout: fonts, ThemeProvider
│   └── globals.css                      # Tailwind + DaisyUI setup
├── components/
│   ├── layout/
│   │   └── container.tsx                # Max-width page container
│   └── ui/                              # Generic, reusable DaisyUI-styled form primitives
│       ├── ิีbutton.tsx                 # Button (not currently imported anywhere)
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── combobox.tsx
│       ├── date-picker.tsx
│       ├── image-upload.tsx
│       ├── input.tsx
│       ├── radio.tsx
│       ├── section-title.tsx
│       ├── select.tsx
│       ├── table.tsx
│       └── thai-address-select.tsx
├── feature/
│   └── job-application/
│       └── components/                  # Composition specific to the job application form
│           ├── education-information-from.tsx
│           ├── family-information-from.tsx
│           ├── general-information-from.tsx
│           ├── header-information.tsx
│           └── working-information-from.tsx
├── lib/
│   ├── thai-address.ts                  # Wraps the `thailand-address` package
│   └── utils.ts                         # cn() class name helper
├── providers/
│   └── theme-provider.tsx               # next-themes wrapper
├── types/
│   └── thailand-address.d.ts            # Ambient types for the untyped `thailand-address` package
└── public/                              # Static assets (default create-next-app SVGs)
```

**(*folder-name*) note**: `(setup)` and `(routes)` are [Next.js route groups](node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route-groups.md) — the parentheses organize files without affecting the URL. The only real routes are `/` and `/job`.

### Folder responsibilities

| Folder | Responsibility | Why it exists |
| --- | --- | --- |
| `app/` | Routing, layouts, global CSS/fonts | Kept thin — pages only compose feature components |
| `components/layout` | Page-level layout primitives (e.g. `Container`) | Shared across any future page, not tied to one feature |
| `components/ui` | Generic, DaisyUI-styled form controls | Reusable building blocks, no business logic or Thai-form-specific copy |
| `feature/job-application` | Composes `components/ui` primitives into the actual form sections, with the job-application-specific labels and structure | Keeps domain/feature-specific composition separate from generic UI |
| `lib/` | Framework-agnostic helpers (`cn()`, Thai address queries) | Reused by both `components/ui` and `feature/` |
| `providers/` | React context providers mounted once at the root | Isolated from page/feature code |
| `types/` | Ambient TypeScript declarations for packages with no shipped types | Needed for `thailand-address`, which has no type definitions |

## Why This Folder Structure

The codebase separates **generic, reusable UI** (`components/ui`, `components/layout`) from **feature-specific composition** (`feature/job-application`), while keeping `app/` as a thin routing layer that only assembles feature components into pages. This is a Separation of Concerns split: `components/ui` has no imports from `feature/`, and `feature/` composes `components/ui` — not the other way around, so the dependency direction is one-way.

```text
app/                (routes; imports feature/)
  ↓
feature/job-application  (imports components/ui, components/layout)
  ↓
components/ui, components/layout  (imports lib/, react)
  ↓
lib/                (leaf utilities)
```

Only one feature (`job-application`) exists today, so this cannot yet be verified against a second feature, but the structure — a `feature/<name>/components` folder next to a generic `components/ui` — appears designed to let additional features be added later without those features needing to touch the shared UI primitives.

## Data Flow

There is no network or persistence layer; all data currently lives in transient React state:

```text
User input
  ↓
Feature form component (feature/job-application/components/*)  — holds field-level state via useState/useRef
  ↓
components/ui primitive (Input, Select, DatePicker, Combobox, …)  — renders the control
```

No values are submitted, sent to a server, or stored beyond the current page session — there is no `onSubmit` handler, no `fetch` call, and no `app/api` route in the codebase.

## Getting Started

The project uses **npm** (only `package-lock.json` is present; no `yarn.lock` or `pnpm-lock.yaml`).

```bash
git clone <repository-url>
cd work-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/job`.

## Environment Variables

No environment variables are used. There is no `.env.example` file, and no `process.env` reference exists anywhere in the source code.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build (`next.config.ts` sets `output: "standalone"`) |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint (`eslint.config.mjs`) |
| `npm run format` | Format the codebase with Prettier |
| `npm run format:check` | Check formatting with Prettier — as written this script (`prettier --check`) has no path argument, so it should be run as `npm run format:check -- .` to check the whole project |

## Development

```text
npm install
  ↓
npm run dev
  ↓
edit feature/job-application/components/* or components/ui/*
  ↓
npm run lint
  ↓
npm run format
  ↓
npm run build
```

There is no CI/CD configuration (`.github/workflows` does not exist), so lint, format, and build are currently run manually.

## Testing

No test framework (Vitest, Jest, or otherwise) is configured, no test files exist in the repository, and `package.json` has no `test` script. Testing infrastructure has not yet been set up for this project.

## Code Quality

- **TypeScript** — `tsconfig.json` has `"strict": true`, catching type errors at compile time (e.g. across `lib/thai-address.ts`'s query functions and `types/thailand-address.d.ts`'s ambient declarations).
- **ESLint** — flat config (`eslint.config.mjs`) extending `eslint-config-next`'s `core-web-vitals` and `typescript` rule sets.
- **Prettier** — enforces consistent formatting; `prettier-plugin-tailwindcss` additionally sorts Tailwind/DaisyUI class name strings.
- No Husky/lint-staged pre-commit hooks or CI checks are configured — quality checks are opt-in via the npm scripts above.

## Deployment

`next.config.ts` sets `output: "standalone"`, which produces a self-contained build suited for containerized deployment. However, no `Dockerfile` or `docker-compose.yml` exists in the repository, and no CI/CD workflow is configured, so this output mode is not yet connected to an actual deployment pipeline.

## Design Decisions

#### TypeScript with strict mode
**Fact**: `tsconfig.json` enables `"strict": true`; all source files are `.ts`/`.tsx`.
**Design Rationale**: Strict typing helps catch mistakes across the many typed form fields and the Thai-address query helpers in `lib/thai-address.ts`.

#### Route groups separating "/" from "/job"
**Fact**: `app/(setup)/page.tsx` redirects `/` to `/job`; the actual form lives under `app/(main)/(routes)/job/page.tsx`.
**Design Rationale**: The structure appears to be designed to keep a lightweight entry/redirect route separate from the main application routes, using route groups so the grouping folders do not affect the URL.

#### Tailwind CSS v4 + DaisyUI
**Fact**: `app/globals.css` imports Tailwind and registers `@plugin "daisyui"` with only the `light` theme; every component in `components/ui` is styled with DaisyUI class names (`btn`, `card`, `input`, `select`, `checkbox`, `radio`, `table`, `fieldset`).
**Design Rationale**: DaisyUI's semantic component classes let the form's many fields be styled consistently without writing bespoke CSS per component.

#### `next-themes` configured but pinned to light
**Fact**: `providers/theme-provider.tsx` wraps `next-themes`, mounted with `defaultTheme="light"` and `enableSystem={false}`; `app/globals.css` registers only the `light` DaisyUI theme.
**Design Rationale**: Not certain from the code — the theming infrastructure is present but only a single theme is registered, which may indicate preparation for future theme support that has not yet been added.

#### `cn()` helper instead of `class-variance-authority`
**Fact**: Every component composes class names with the local `cn()` helper (`clsx` + `tailwind-merge`, `lib/utils.ts`); `class-variance-authority` is a declared dependency but is not imported anywhere.
**Design Rationale**: No evidence in the code explains why `class-variance-authority` was installed — it should be treated as currently unused rather than as an active design choice.

#### Wrapping `thailand-address` to fix its field names
**Fact**: `lib/thai-address.ts` documents that the underlying package's `subdistrict` field actually holds the amphoe (district) name and its `district` field holds the tambon (subdistrict) name; the wrapper functions (`getAmphoes`, `getTambons`) rename these to their correct Thai administrative terms.
**Design Rationale**: This is stated directly in the source code's own comment, not inferred — the wrapper exists to hide a naming inconsistency in the third-party package.

#### Ambient type declarations for `thailand-address`
**Fact**: `types/thailand-address.d.ts` declares types for `thailand-address/lib/main.es.js`, a module with no shipped TypeScript types.
**Design Rationale**: Required for strict-mode TypeScript to type-check code that imports an untyped third-party package.

## Developer Guide

New contributors should read the project in this order:

1. This README, especially **Tech Stack** and **Folder Structure**.
2. `app/layout.tsx` — global fonts and `ThemeProvider` setup.
3. `app/(setup)/page.tsx` and `app/(main)/(routes)/job/page.tsx` — routing and page composition.
4. `feature/job-application/components/*.tsx` — read in the order they are composed in `job/page.tsx` (Header → General → Family → Education → Working information).
5. `components/ui/*.tsx` — the DaisyUI-styled primitives reused by the feature components.
6. `lib/utils.ts` and `lib/thai-address.ts` — the two shared utility modules.

## Troubleshooting

- **The form does not save or submit anything.** This is expected in the project's current state — there is no `onSubmit` handler, `fetch` call, or `app/api` route. All field values live in local component state and are lost on refresh or navigation.
- **`components/ui/ิีbutton.tsx`** contains stray Thai combining characters in its filename (it does not read as plain `button.tsx`), and its exported `Button` component is not imported anywhere else in the codebase.
- **`npm run format:check` appears to do nothing.** The script is defined as `prettier --check` with no path argument; run `npm run format:check -- .` to check the whole project.
- **`.vscode/settings.json`** configures a Prisma formatter (`"[prisma]"`, `prisma-smart-formatter.*`), but no `prisma` dependency or `.prisma` schema file exists in the project — this setting currently has no effect.

## Future Improvements

The following gaps were observed in the current codebase and are noted here as-is, not as a roadmap:

- No form submission logic (`onSubmit`, API route, or persistence layer) is wired up yet.
- No automated tests exist.
- No CI/CD workflow exists, despite `next.config.ts` already being configured for a standalone/containerized build.
- `@heroicons/react` and `class-variance-authority` are installed but unused.
