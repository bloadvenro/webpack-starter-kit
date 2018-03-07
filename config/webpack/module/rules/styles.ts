import * as Webpack from 'webpack'
import { scanLoaders } from '../../__helpers__'
import { DEV } from '../../../env'

const extractCSSPlugin = require('../../plugins/extractCSS')

const preprocessorData = scanLoaders([
  [
    /\.(sass|scss)$/,
    [
      {
        loader: 'sass-loader' // Do not forget to `yarn add -D node-sass`!
      }
    ]
  ],
  [
    /\.styl$/,
    [
      {
        loader: 'stylus-loader' // Do not forget to `yarn add -D stylus`!
      }
    ]
  ],
  [
    /\.less$/,
    [
      {
        loader: 'less-loader' // Do not forget to `yarn add -D less`!
      }
    ]
  ]
])

const stylesRule: Webpack.Rule = {
  test: preprocessorData ? preprocessorData[0] : /\.css$/,
  use: extractCSSPlugin.extract({
    use: (function(loaders: Webpack.Loader[]) {
      // Insert CSS in style tag if not extracted to file.
      DEV && loaders.push(require.resolve('style-loader'))
      // Translate CSS into CommonJS.
      loaders.push({
        loader: require.resolve('css-loader'),
        options: {
          minimize: !DEV
        }
      })
      // Rich CSS post processing.
      !DEV &&
        loaders.push({
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [require('autoprefixer')()]
          }
        })
      // Add CSS preprocessor if any.
      preprocessorData && loaders.push(...preprocessorData[1])
      return loaders
    })([])
  })
}

module.exports = stylesRule
