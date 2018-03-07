import * as Webpack from 'webpack'

const fallbackRule: Webpack.Rule = {
  test: function matchEverything() {
    return true
  },
  exclude: [
    /\.js$/, // usually we rely on webpack when it comes to .js
    /\.html$/, // .html files are handled by html-webpack-plugin (or we can just enable html-loader).
    /\.json$/ // .json files are often generated by webpack internally (i.e. hot-update.json).
  ],
  loader: require.resolve('file-loader'),
  options: {
    name: '[name].[hash].[ext]' // Useful for assets hot module replacement and long caching.
  }
}

module.exports = fallbackRule