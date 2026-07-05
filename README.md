# Glint

Deterministic SVG avatar generator. Give it any seed string and get back a unique, consistent avatar every time — no storage, no external requests, no randomness.

## What it does

Glint takes a `seed` string, hashes it deterministically, and produces a styled SVG avatar with a radial gradient background and optional initials overlay. The same seed always produces the same avatar — across environments, runtimes, and deploys.

## Packages

| Package                          | Description                                                        |
| -------------------------------- | ------------------------------------------------------------------ |
| [`@glint/core`](./packages/core) | Core library — framework-agnostic, works in Node, Vite, and Vercel |

## Apps

| App               | Description            |
| ----------------- | ---------------------- |
| `apps/web`        | Landing page           |
| `apps/docs`       | Documentation          |
| `apps/playground` | Interactive playground |

---

## Quick start

```bash
npm install @glint/core
```

```ts
import { generateAvatar } from "@glint/core";

const svg = generateAvatar({ seed: "john.doe" });

// Use as an img src
const src = `data:image/svg+xml;base64,${btoa(svg)}`;
```

## API

### `generateAvatar(options)`

Returns an SVG string.

| Option    | Type      | Default   | Description                                          |
| --------- | --------- | --------- | ---------------------------------------------------- |
| `seed`    | `string`  | required  | Determines the gradient palette and layout           |
| `name`    | `string`  | —         | Renders up to 2-character initials over the gradient |
| `size`    | `number`  | `128`     | Width and height of the SVG in pixels                |
| `rounded` | `boolean` | `false`   | Renders as a circle when `true`                      |
| `font`    | `string`  | `"Inter"` | Font family for the initials                         |
| `noise`   | `boolean` | `true`    | Adds a subtle noise texture layer                    |
| `blur`    | `boolean` | `true`    | Adds a soft blur layer for depth                     |

```ts
const svg = generateAvatar({
  seed: "jane.smith",
  name: "Jane Smith",
  size: 256,
  rounded: true,
  font: "Inter",
  noise: true,
  blur: true,
});
```

### Initials logic

When `name` is provided, Glint extracts initials from it:

- Single word → first two characters (`"Adebayo"` → `"AD"`)
- Multiple words → first character of first and last word (`"Jane Smith"` → `"JS"`)

---

## Monorepo structure

```
glint/
├── packages/
│   └── core/          @glint/core — the publishable library
├── apps/
│   ├── web/           landing page (Vite + React)
│   ├── docs/          documentation (Vite + React)
│   └── playground/    interactive playground (Vite + React)
└── package.json       workspace root
```

## Development

Requires [pnpm](https://pnpm.io).

```bash
# Install dependencies
pnpm install

# Start the landing page
pnpm dev:website

# Start the docs
pnpm dev:docs

# Start the playground
pnpm dev:playground
```

## Build

```bash
# Build everything (core first, then apps)
pnpm build

# Build only core
pnpm --filter @glint/core build

# Type-check the entire workspace
pnpm typecheck

# Lint all apps
pnpm lint
```

> Always run `pnpm --filter @glint/core build` before pushing if you changed anything in `packages/core`. The Vercel serverless function in `apps/web/api` uses the compiled `dist/` output.

---

## License

MIT © [Charmingdc](https://github.com/Charmingdc)
