# AZ Grad Common UI Resources

Reusable React components, CSS, and JS resources for Graduate College web projects
especially apps based on [Arizona Bootstrap](https://digital.arizona.edu/arizona-bootstrap/).

## Use Common UI in your own project

First install as a project dependency:

```sh
npm install --save uazgraduatecollege/azgrad-common-ui
```

Use the example app (in `src/example`) as a guide to make use of Common UI components.

## Install & develop locally

```sh
git clone git@github.com/uazgraduatecollege/azgrad-common-ui.git
cd azgrad-common-ui
npm install
```

## Run the Example

```sh
npx parcel --dist-dir .example src/example/example.html
```

## Build for production

```sh
npm run build
git add .
git commit -m "Build distribution"
git push origin some-branch-name # etc
```

## Developed By

University of Arizona Graduate College IT

## Copyright

Copyright (c) 2022 Arizona Board of Regents on Behalf of the University of Arizona.
All rights reserved.
