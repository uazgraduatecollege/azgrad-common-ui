# AZ Grad Common UI Resources

Reusable React components, CSS, and JS resources for Graduate College web projects
especially apps based on [Arizona Bootstrap](https://digital.arizona.edu/arizona-bootstrap/).

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

Run or build your project with a parcel or whatever bundler you're using.

## Install & develop locally

```sh
git clone git@github.com/uazgraduatecollege/azgrad-common-ui.git
cd azgrad-common-ui
npm install
```

## Run the example app

```sh
npx run example
```

## Run tests

```sh
npm test
```

## Build for production

```sh
npm run build
git add .
git commit -m "Build distribution"
git push origin some-branch-name # etc
```

## Developed by

University of Arizona Graduate College IT

## Copyright

Copyright (c) 2022 Arizona Board of Regents on Behalf of the University of Arizona.
All rights reserved.
