import * as Webpack from 'webpack'

const typescriptRule: Webpack.Rule = {
  test: /\.tsx?$/,
  use: (function(loaders: Webpack.Loader[]) {
    try {
      loaders.push(require.resolve('react-hot-loader/webpack'))
    } catch {}
    loaders.push(require.resolve('ts-loader'))
    return loaders
  })([])
}

module.exports = typescriptRule
