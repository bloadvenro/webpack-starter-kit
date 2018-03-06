import * as Webpack from 'webpack'
import destinations from '../../destinations'

module.exports = {
  entry: require('./entry'),
  plugins: [
    ...require('../development/plugins/templates'),
    require('../development/plugins/cleanOutputDir'),
    require('../development/plugins/provide'),
    require('./plugins/define'),
    require('./plugins/extractCSS'),
    require('./plugins/uglifyJS')
  ],
  module: {
    rules: [
      {
        include: destinations.directories.source,
        oneOf: [
          require('./module/rules/css'),
          require('./module/rules/images'),
          // Uncomment the line below if you use typescript
          // require('../development/module/rules/typescript'),
          // Uncomment the line below if you use slim
          // require('./module/rules/slim'),
          require('../development/module/rules/pug'),
          require('../development/module/rules/fallback') // This rule must be the last one.
        ]
      }
    ]
  },
  resolve: require('../development/resolve'),
  output: require('./output')
} as Webpack.Configuration
