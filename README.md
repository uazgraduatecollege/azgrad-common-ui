# AZ Grad Common UI Resources

Reusable React components, CSS, and JS resources for Graduate College web projects,
especially apps based on [Arizona Bootstrap](https://digital.arizona.edu/arizona-bootstrap/).

## About

AZ Grad Common UI includes the following components:

- `ArizonaBanner`: The red banner with the UArizona logo for the top of the page
- `Footer`: A fully developed footer for Graduate College websites.
- `Logo`: Provides a Graduate College logo using any of 3 variants:
  - `grad-lockup-blue`: A logo with "Graduate College" in blue text (default).
  - `grad-lockup-full-blue`: A logo with University of Arizona _and_ Graduate College in blue text (for light backgrounds).
  - `grad-lockup-full-white`: A logo with University of Arizona _and_ Graduate College in white text (for dark backgrounds).
- `SearchForm`: A form that triggers a search on the College's Google Custom Search Engine (CSE). Embedded in the `Footer`.

Common UI also provides 3 image components that can be used in value of an image's `src` attribute.
These correspond to the `Logo` component's variants.

- `GradLockupBlue`
- `GradLockupFullBlue`
- `GradLockupFullWhite`

## Use Common UI in your own project

Install as a project dependency with pnpm:

```sh
pnpm add uazgraduatecollege/azgrad-common-ui
```

Or use npm:

```sh
npm install --save uazgraduatecollege/azgrad-common-ui
```

For local development of this repository, install the development dependencies with pnpm:

```sh
pnpm install
```

Use the example app (in `src/example`) as a guide to make use of Common UI components.

1. Create `div`s with IDs `header-container`, `logo-container`, and `footer-container` in your project's main HTML file(s).
2. Create an entrypoint such as `app.jsx` that renders the **ArizonaBanner**, **Logo**, and **Footer** components.
3. Call that entrypoint just before the closing `</body>` tag of the page.

Run or build your project with [parcel](https://parceljs.org/) or whatever bundler you're using.

## Install & develop locally

Development requires Node.js 24 or newer and pnpm 11. The repository pins pnpm through Corepack.

```sh
git clone git@github.com:uazgraduatecollege/azgrad-common-ui.git
cd azgrad-common-ui
corepack enable
corepack prepare pnpm@11.15.1 --activate
pnpm install
```

`pnpm install` also runs the `prepare` script, which builds the library with Parcel.

## Run the example app

```sh
pnpm run example
```

## Build the library

```sh
pnpm build
```

Parcel writes the distributable entry points to `dist/`. The published package contains `dist/` along with its package metadata and documentation.

## Run tests

```sh
pnpm test
```

Vitest runs the test suite once by default in the `jsdom` environment. The setup file loads Testing Library DOM matchers. Use `pnpm test --watch` for watch mode or `pnpm test logo` to run tests matching a specific filename or pattern.

## Run the linter

```sh
pnpm lint
```

The project uses ESLint 9 with NeoStandard and the flat configuration in `eslint.config.js`.

## Developed by

University of Arizona Graduate College IT

## Copyright

Copyright (c) 2022 Arizona Board of Regents on Behalf of the University of Arizona.
All rights reserved.
