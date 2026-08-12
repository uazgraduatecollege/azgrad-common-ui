# Copilot instructions

## Build, test, and lint

- Use Node.js 24 or newer and pnpm 11 through Corepack. `pnpm-lock.yaml` is authoritative; prefer pnpm over the consumer npm example in `README.md`.
- Install dependencies with `corepack enable && corepack prepare pnpm@11.15.1 --activate && pnpm install`. Installation runs the `prepare` script, which builds the library.
- Build the distributable with `pnpm build`. Parcel writes the package entry points to `dist/`.
- Run the test suite once with `pnpm test`.
- Run one test file with `pnpm test logo` (or another filename/pattern such as `footer` or `search-form`). Use `pnpm test --watch` for watch mode.
- Run the linter with `pnpm lint`. ESLint uses the flat `eslint.config.js` configuration and NeoStandard: StandardJS-style JavaScript, no semicolons, and two-space indentation.
- Run the example app with `pnpm run example`; it serves `src/example/example.html` and writes generated output to `.example/`.

## Architecture

- This is a reusable React 18 component library for Graduate College sites using Arizona Bootstrap 5. `src/index.js` is the public API and exports `ArizonaBanner`, `Footer`, `Logo`, `SearchForm`, and the three logo image components.
- Components are intentionally presentation-focused. `ArizonaBanner`, `Footer`, and `Logo` render into host-provided DOM containers; `src/example/app.jsx` demonstrates mounting each with React `createRoot`.
- Consumers must provide the Arizona Bootstrap CSS/JS and Arizona icon/font resources. The required CDN assets and the expected `header-container`, `logo-container`, and `footer-container` elements are documented in `src/example/example.html`.
- `Footer` composes `Logo` and `SearchForm` and gets all navigation data from `src/footer-links.json`; update that JSON rather than duplicating links in JSX.
- `SearchForm` uses the `SEARCH_URI` environment variable, falling back to `https://grad.arizona.edu/search`. Parcel substitutes this value at build time.
- Logo components use embedded base64 data URLs from `src/img/*.js`. The related PNG files are source artwork; changing artwork requires regenerating the JavaScript image modules rather than editing the data URL by hand.
- `src/style.css` is only the library's small supplement; it does not replace the consuming site's Arizona Bootstrap styles.
- Vitest runs in `jsdom`; `vitest.setup.js` loads `@testing-library/jest-dom/vitest`, and JSX source files use the `.jsx` extension.

## Repository conventions

- Keep the public component surface synchronized through `src/index.js`; internal component files are not package entry points.
- Tests in `src/__tests__/` are smoke tests that render components with `createRoot`. The ESLint configuration deliberately disables `no-undef` for this directory.
- Generated `dist/`, `.example/`, and `.parcel-cache/` content is ignored and should not be edited or committed. `src/scratch.footer.js` is ignored scratch work, not production source.
- The root `.env` is tracked/not ignored; never add secrets to it. Use `.env.local` for local-only values.
- Releases are published to GitHub Packages by `.github/workflows/release-and-publish-on-tag.yml` when a semver tag (including alpha/beta prereleases) is pushed. Do not publish manually; the package contains `dist/` plus package metadata and documentation.
- CI uses Node 24, installs with pnpm, and runs `pnpm test`.
