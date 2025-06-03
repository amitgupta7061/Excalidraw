sample-monorepo
Build Status

Sample monorepo setup with npm workspaces and typescript project references.

Getting started
Clone repository and execute the following commands in the root:

npm i
npm run build
npm start - to see the client running in dev-mode (non-minified; with source-maps)
npm run start:server - to see server running (with SSR; client is minified with source-maps)
Setup explained
Tooling
Monorepo is installed using npm.

Packages are automatically linked together, meaning you can do cross-package work within the repo.
devDependencies are common, and only appear in the root package.json. Easier to manage and upgrade.
Each package has its own scripts and dependencies. They are being installed in the root node_modules, using the same deduping mechanism npm uses for single packages.
Adding new packages is as simple as dropping an existing package in the packages folder, and re-running npm i.
Sources and tests are written in strict TypeScript.

Common base tsconfig.base.json.
Included sample packages
@sample/components

React components library.
@sample/app

React application.
Uses the @sample/components package (also inside monorepo).
@sample/server

Express application.
Uses the @sample/app package (also inside monorepo).
Listens on http://localhost:3000 (client only rendering) http://localhost:3000/server (SSR rendering).
Basic structure and configurations
.github                  // CI flow configuration (GitHub Actions)
packages/
  some-package/
    src/
      test/              // package-specific test folder
        test.spec.ts
      index.ts
      tsconfig.json      // package-specific config, built to "some-package/dist"
    LICENSE              // license file. included in npm artifact
    package.json         // package-specific deps and scripts
    README.md            // shown in npmjs.com. included in npm artifact

.eslintignore            // eslint (linter) ignored directories/files
.eslintrc                // eslint (linter) configuration
.gitignore               // github's default node gitignore with customizations
.prettierignore          // prettier (formatter) ignored directories/files
.prettierrc              // prettier (formatter) configuration
lerna.json               // lerna configuration (needed for deployment below)
LICENSE                  // root license file. picked up by github
package-lock.json        // the only lock file in the repo. all packages combined
package.json             // common dev deps and workspace-wide scripts
README.md                // workspace-wide information. shown in github
tsconfig.base.json       // common typescript configuration
tsconfig.json            // solution-style root typescript configuration
webpack.config.js        // root webpack configuration. inherited by app's webpack config
Styling solutions
This repository aims to avoid showcasing styling solutions in-depth.

Webpack's experimental CSS handling is turned on for the sanitize.css library being used, but the infrastructure doesn't contain any asset copying (into dist folder) and so doesn't support local css assets.

Each styling solution has its own set of infrastructure requirements.

CSS-in-JS based solutions, for example, probably won't need to worry about it at all, and work without additional setup.

Within Wix, we use Stylable, which has its own CLI (stc) to build and/or copy .st.css files into dist.

Full support for source code importing .css/.scss/.less/.whatever would require additional building. It would have to be addressed for Node as well, if one wants to execute tests importing these source files.

Dependency management
Traditionally, working with projects in separate repositories makes it difficult to keep versions of devDependencies aligned, as each project can specify its own devDependency versions.

Monorepos simplify this, because devDependencies are shared between all packages within the monorepo.

Taking this into account, we use the following dependency structure:

devDependencies are placed in the root package.json
dependencies and peerDependencies are placed in the package.json of the relevant package requiring them, as each package is published separately
New devDependencies can be added to the root package.json using npm:

npm i <package name> -D
Some packages depend on sibling packages within the monorepo. For example, in this repo, @sample/app depends on @sample/components. This relationship is just a normal dependency, and can be described in the package.json of app like so:

  "dependencies": {
    "@sample/components": "<package version>"
  }
Deployment
npx lerna publish will publish new versions of the packages to npm.

Lerna asks for new version numbers for packages that changed since last release and their dependencies. Every package has a prepack script which automatically runs build prior to packing.

npx lerna publish --force-publish will force a release of all packages, regardless of which ones actually changed.

Deployment of app/server assets to any actual production servers is not shown.
