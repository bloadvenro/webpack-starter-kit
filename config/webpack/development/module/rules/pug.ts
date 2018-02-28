import * as Webpack from 'webpack'

const pugRule: Webpack.Rule = {
  test: /.pug$/,
  loader: require.resolve('pug-loader'),
  options: {
    pretty: true
  }
}

module.exports = pugRule
