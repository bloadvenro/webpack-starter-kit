import * as Webpack from 'webpack'
import destinations from '../../destinations'

const output: Webpack.Output = {
  publicPath: '/', // You should never forget to define this option. Default does not fit.
  path: destinations.directories.output,
  filename: '[name].js' // No need hashed names in development; hmr deals with replacement.
}

module.exports = output
