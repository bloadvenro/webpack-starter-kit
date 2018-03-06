import * as Webpack from 'webpack'

const slimRule: Webpack.Rule = {
  test: /\.slim$/,
  loaders: [require.resolve('html-loader'), require.resolve('slim-lang-loader')]
}

module.exports = slimRule
