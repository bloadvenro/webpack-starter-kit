import * as Webpack from 'webpack'
import destinations from '../../destinations'

module.exports = {
  entry: require('./entry'),
  plugins: [
    ...require('./plugins/templates'),
    require('./plugins/cleanOutputDir'),
    require('./plugins/provide'),
    require('./plugins/HMR'),
    require('./plugins/writeHTMLAssetsToDisk')
  ],
  module: {
    rules: [
      {
        include: destinations.directories.source,
        oneOf: [
          // Uncomment the line below if you use typescript
          // require('./module/rules/typescript'),
          // Uncomment the line below if you use slim
          // require('./module/rules/slim'),
          require('./module/rules/css'),
          require('./module/rules/pug'),
          require('./module/rules/fallback') // This rule must be the last one.
        ]
      }
    ]
  },
  resolve: require('./resolve'),
  output: require('./output'),
  devServer: require('./devServer'),
  devtool: 'eval'
} as Webpack.Configuration
