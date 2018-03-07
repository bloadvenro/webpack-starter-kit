import * as Webpack from 'webpack'
import destinations from '../destinations'
import { DEV } from '../env'

module.exports = {
  context: destinations.directories.source,
  entry: require('./entry'),
  plugins: (function(plugins: Webpack.Plugin[]) {
    plugins.push(require('./plugins/cleanOutputDir'))
    plugins.push(...require('./plugins/templates'))
    plugins.push(require('./plugins/provide'))
    plugins.push(require('./plugins/extractCSS')) // Disabled internally in DEV (see config).
    DEV && plugins.push(require('./plugins/hmr'))
    DEV && plugins.push(require('./plugins/writeHTMLAssetsToDisk'))
    !DEV && plugins.push(require('./plugins/define'))
    !DEV && plugins.push(require('./plugins/uglifyJS'))
    return plugins
  })([]),
  module: {
    rules: [
      {
        include: destinations.directories.source,
        oneOf: (function(rules: Webpack.Rule[]) {
          !DEV && rules.push(require('./module/rules/images'))
          rules.push(require('./module/rules/styles'))
          rules.push(require('./module/rules/templates'))
          try {
            require.resolve('ts-loader')
            rules.push(require('./module/rules/typescript'))
          } catch {}
          // All internally required project assets without an
          // appropriate loader will be handlerd by fallback rule!
          // This rule must be the last one in the list!
          rules.push(require('./module/rules/fallback'))
          return rules
        })([])
      }
    ]
  },
  resolve: require('./resolve'),
  output: require('./output'),
  devServer: require('./devServer'),
  devtool: 'inline-source-map'
} as Webpack.Configuration
