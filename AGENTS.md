# AGENTS.md

## Package manager
- Use **pnpm** (v11, via corepack) — `npm` commands do not match the repo. `pnpm-lock.yaml` is the lockfile. README's `npm install` instructions are stale.

## Commands
- `pnpm install` — also runs `prepare` → `parcel build`; install fails if the build fails.
- `pnpm test` — Jest via `react-scripts test`. Watch mode by default; use `CI=true pnpm test` for a one-shot run and `CI=true pnpm test <name>` for a single file (e.g. `CI=true pnpm test logo`).
- `pnpm run example` — Parcel dev server for the example app in `src/example/` (needs its container divs in `example.html`). Outputs to `.example/` (gitignored).
- `pnpm build` — `parcel build` → `dist/` (gitignored; `main`/`module` in package.json point here).
- `pnpm lint` — ESLint 9 with neostandard (StandardJS-style, no semicolons, 2-space indent) via flat config in `eslint.config.js`. No typecheck script.

## Releases
- Published to GitHub Packages (private registry `npm.pkg.github.com`). Do NOT publish manually — push a semver tag (`*.*.*`, `*.*.*-alpha*`, `*.*.*-beta*`); `.github/workflows/release-and-publish-on-tag.yml` creates the release and runs `pnpm publish --registry https://npm.pkg.github.com/`.
- The published tarball contains only `dist/` (via `files: ["dist"]`) plus package.json/README/LICENSE — `src/` and `.env` are not shipped.

## Architecture
- `src/index.js` is the library entrypoint. Public API: `ArizonaBanner`, `Footer`, `Logo`, `SearchForm`, and image components `GradLockupBlue`, `GradLockupFullBlue`, `GradLockupFullWhite`.
- `src/footer-links.json` is the single source of truth for all footer navigation links.
- Logo images are base64 data-URLs hardcoded in `src/img/*.js` (the `.png` siblings are the sources) — changing artwork means regenerating the JS modules.
- `SearchForm` uses `process.env.SEARCH_URI` (defaults to `https://grad.arizona.edu/search`); Parcel inlines env vars at build time.
- Components depend on Arizona Bootstrap 5 styles/JS and icon/font CDNs loaded by the consuming app — see `src/example/example.html` for the required CDN links. `src/style.css` is only a small supplement.

## Conventions & gotchas
- Tests in `src/__tests__/` are smoke tests ("renders without crashing") using `createRoot`; `no-undef` is disabled for that dir in `eslint.config.js`.
- `src/scratch.footer.js` is gitignored scratch (`scratch.*` pattern) — not source; don't commit or edit.
- `.env` at repo root is NOT gitignored (only `.env.local` is) — never add secrets to it.
- `dist/`, `.example/`, `.parcel-cache/` are build artifacts, all gitignored.
- CI: `.gitlab-ci.yml` runs `pnpm install` + `pnpm test` on node:24 (CI providers set `CI=true`, which keeps Jest out of watch mode).
