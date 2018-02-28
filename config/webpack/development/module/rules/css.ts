import * as Webpack from 'webpack'

const cssRule: Webpack.Rule = {
  test: /\.css$/,
  use: [
    {
      loader: require.resolve('style-loader') // creates style nodes from JS strings
    },
    {
      loader: require.resolve('css-loader') // translates CSS into CommonJS
    }
    // Uncomment section below and then uncomment neccessary loader to add preprocessor support.
    // {
    //   // loader: require.resolve('sass-loader')
    //   // loader: require.resolve('less-loader')
    //   // loader: require.resolve('stylus-loader')
    // }
  ]
}

module.exports = cssRule
