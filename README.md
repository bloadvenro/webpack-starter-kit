# About

## Features

- es6 config powered by typescriptlang
- calibrated and extensible onfiguration structure to eliminate the mess
- start (development) / build (production) working modes (run with `bin/*` scripts via nodejs api)
- start/build in docker out of the box (just issue `yarn docker-start` command; see `package.json` _scripts_ section)
- automatic templates directory scanning: simply add templates (landing, main, about, etc) and webpack html plugin instance will be created for each of them during startup.
- flawless livereload for html changes (based of write-file plugin, connect-livereload and livereload server/watcher)
- full js/css/images minification with long-caching in production and css autoprefixing
- clarifying configuration commentaries and "uncomment me" sections for quick features activation
- open browser page in development mode

Despite of number of basic features this boilerplate is quite minimalistic and markup-oriented with the possibility to quickly became a SPA scaffolding tool.

