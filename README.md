# AZ Grad Common UI Resources

Reusable React components, CSS, and JS resources for Graduate College web projects,
especially apps based on [Arizona Bootstrap](https://digital.arizona.edu/arizona-bootstrap/).

## About

AZ Grad Common UI includes the following components:

- `ArizonaBannner`: The red banner with the UArizona logo for the top of the page
- `Footer`: A fully developed footer for Graduate College websites.
- `Logo`: Provides a Graduate College logo using any of 3 variants:
  - `grad-lockup-blue`: A logo with "Graduate College" in blue text (default).
  - `grad-lokup-full-blue`: A logo with University of Arizona _and_ Graduate College in blue text (for light backgrounds).
  - `grad-lokup-full-white`: A logo with University of Arizona _and_ Graduate College in white text (for dark backgrounds).
- `SearchForm`: A form that triggers a search on the College's Google Custom Search Engine (CSE). Embedded in the `Footer`.

Common UI also provides 3 image components that can be used in value of an image's `src` attribute.
These correspond to the `Logo` component's variants.

- `GradLockupBlue`
- `GradLockupFullBlue`
- `GradLockupFullWhite`

## Use Common UI in your own project

First install as a project dependency:

```sh
npm install --save uazgraduatecollege/azgrad-common-ui
```

Next, install recommended dependencies. These are optional, but should make developing your project a happier experience.

```sh
npm install --save-dev parcel process react react-dom react-scripts @testing-library/jest-dom @testing-library/react
```

Use the example app (in `src/example`) as a guide to make use of Common UI components.

1. Create `div`s with IDs `header-container`, `logo-container`, and `footer-container` in your project's main HTML file(s).
2. Create an `app.js` file that will render the  **ArizonaBanner**, **Logo**, and **Footer** components.
3. Call `app.js` just before the closing `</body>` tag of the page: `<script src="app.js"></script>`.

Run or build your project with [parcel](https://parceljs.org/) or whatever bundler you're using.

## Install & develop locally

```sh
git clone git@github.com/uazgraduatecollege/azgrad-common-ui.git
cd azgrad-common-ui
npm install
```

## Run the example app

```sh
npm run example
```

## Run tests

```sh
npm test
```

## Developed by

University of Arizona Graduate College IT

## Copyright

Copyright (c) 2022 Arizona Board of Regents on Behalf of the University of Arizona.
All rights reserved.
