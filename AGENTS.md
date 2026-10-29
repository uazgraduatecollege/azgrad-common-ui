# AGENTS.md

## Package manager
- Use **pnpm 12** (via Corepack) with **Node.js 24 or newer** — `npm` commands do not match the repo. `pnpm-lock.yaml` is the lockfile. README's npm install instructions are for consumers and are not the repository workflow.

## Commands
- `pnpm install` — also runs `prepare`, which builds the library with `parcel build --target main --target module`; install fails if the build fails.
- `pnpm test` — Vitest one-shot test run. Use `pnpm test --watch` for watch mode and `pnpm test logo` for a single file or pattern.
- `pnpm run example` — Parcel dev server for the example app in `src/example/` (needs its container divs in `example.html`). Uses the `example` target and outputs to `.example/` (gitignored).
- `pnpm build` — builds only the `main` and `module` Parcel targets with `parcel build --target main --target module`, producing the library in `dist/` (gitignored).
- `pnpm lint` — ESLint 9 with neostandard (StandardJS-style, no semicolons, 2-space indent) via flat config in `eslint.config.js`. No typecheck script.

## Releases
- Published to GitHub Packages (private registry `npm.pkg.github.com`). Do NOT publish manually — push a semver tag (`X.Y.Z`, `X.Y.Z-alpha*`, `X.Y.Z-beta*`, `X.Y.Z-rc*`); `.github/workflows/release-and-publish-on-tag.yml` publishes first, then creates the GitHub release (only if publish succeeds). The registry comes from `publishConfig` in `package.json`, not a `--registry` flag.
- Prerelease tags publish under their own dist-tag (`alpha`, `beta`, `rc`) and are marked as prereleases on GitHub; only stable tags publish to `latest`.
- The release workflow explicitly builds and verifies `dist/main.js` and `dist/module.js`, then runs `pnpm pack --dry-run` and `pnpm test` before publishing.
- The published tarball contains only `dist/` (via `files: ["dist"]`) plus package.json/README/LICENSE — `src/` and `.env` are not shipped.

## Deferred dependency work
- Coordinate with downstream projects before upgrading React, React DOM, or `@testing-library/react` to React 19-compatible versions.
- Coordinate with downstream projects before upgrading ESLint to 10 and NeoStandard to its stable ESLint 10-compatible release.
- Revisit the deprecated transitive `whatwg-encoding` package with the Vitest/jsdom upgrade; it is not independently actionable.
- Arizona Bootstrap `5.1.7` was evaluated and intentionally retained; do not change the CDN assets without a separate compatibility review.

## Architecture
- `src/index.js` is the library entrypoint. Public API: `ArizonaBanner`, `Footer`, `Logo`, `SearchForm`, and image components `GradLockupBlue`, `GradLockupFullBlue`, `GradLockupFullWhite`.
- `src/footer-links.json` is the single source of truth for all footer navigation links.
- Logo images are base64 data-URLs hardcoded in `src/img/*.js` (the `.png` siblings are the sources) — changing artwork means regenerating the JS modules.
- `SearchForm` uses the `SEARCH_URI` environment variable (defaults to `https://grad.arizona.edu/search`); Parcel inlines it at build time.
- Vitest uses the `jsdom` environment and `vitest.setup.js` loads `@testing-library/jest-dom/vitest`; JSX source files use the `.jsx` extension.
- Components depend on Arizona Bootstrap 5 styles/JS and icon/font CDNs loaded by the consuming app — see `src/example/example.html` for the required CDN links. `src/style.css` is only a small supplement.

## Conventions & gotchas
- Tests in `src/__tests__/` are smoke tests ("renders without crashing") using `createRoot`; `no-undef` is disabled for that dir in `eslint.config.js`.
- `src/scratch.footer.js` is gitignored scratch (`scratch.*` pattern) — not source; don't commit or edit.
- `.env` at repo root is NOT gitignored (only `.env.local` is) — never add secrets to it.
- `dist/`, `.example/`, `.parcel-cache/` are build artifacts, all gitignored.
- CI: `.gitlab-ci.yml` runs `pnpm install` + `pnpm test` on node:24.
