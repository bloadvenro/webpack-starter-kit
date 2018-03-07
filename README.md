# About

## Features

* es6 config powered by typescriptlang
* calibrated and extensible configuration structure to eliminate the mess
* `yarn start` (development) / `yarn build` (production) working modes (call `bin/*` scripts via nodejs api)
* start/build in docker container out of the box with `yarn docker-start` and `yarn docker-build`
* zero configuration for templates: simply add templates (landing, main, about, etc) and webpack html plugin instance will be created for each of them during startup
* zero configuration for html/pug/slim/sass/less/stylus assets: just install appropriate loaders and stuff (read `npm install` tips in config/webpack/module/rules/<rule>.ts files)
* zero-configuration for typescript: just `yarn add -D ts-loader@3`
* zero-configuration for react hot reloading: just `yarn add -D react-hot-loader@3`
* `React` namespace is provided globally for seamless JSX rendering (no explicit react imports in every file)
* flawless livereload for html changes (based of write-file plugin, connect-livereload and livereload server)
* full js/css/images/html minification with long-caching support in production and css autoprefixing
* open browser page in development mode (really hate this feature)
* when developing app, requires/imports from paths like `~/domain/feature/some` are performed relatively to the project source dir
