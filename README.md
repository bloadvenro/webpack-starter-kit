# About

## Features

- es6 config powered by typescriptlang
- calibrated and extensible configuration structure to eliminate the mess
- start (development) / build (production) working modes (run with `bin/*` scripts via nodejs api)
- start/build in docker out of the box (just issue `yarn docker-start` command; see `package.json` _scripts_ section)
- automatic templates directory scanning: simply add templates (landing, main, about, etc) and webpack html plugin instance will be created for each of them during startup
- zero-configuration for sass/less/stylus/html/pug/slim - just npm install appropriate loaders and stuff
- flawless livereload for html changes (based of write-file plugin, connect-livereload and livereload server)
- full js/css/images/html minification with long-caching support in production and css autoprefixing
- open browser page in development mode (really hate this feature)
- when developing app, requires/imports from paths like `~/domain/feature/some` are performed relatively to the project source dir
- contains commented preconfigured typescript rule, react-hot entries, and option to provide React namespace globally (almost useless if you have autoimport) 
