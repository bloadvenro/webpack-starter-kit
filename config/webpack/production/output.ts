import * as Webpack from 'webpack'

const output: Webpack.Output = {
  ...require('../development/output'),
  filename: '[name].[hash].js'
}

module.exports = output
