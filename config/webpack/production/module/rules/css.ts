import * as Webpack from 'webpack'

const extractCSSPlugin = require('../../plugins/extractCSS')
const cssRule: Webpack.Rule = {
  test: /\.css$/,
  use: extractCSSPlugin.extract({
    use: [
      {
        loader: require.resolve('css-loader'), // translates CSS into CommonJS
        options: {
          minimize: true
        }
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [require('autoprefixer')()]
        }
      }
      // Uncomment section below and then uncomment neccessary loader to add preprocessor support.
      // {
      //   // loader: require.resolve('sass-loader')
      //   // loader: require.resolve('less-loader')
      //   // loader: require.resolve('stylus-loader')
      // }
    ]
  })
}

module.exports = cssRule
