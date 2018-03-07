import * as Webpack from 'webpack'
import destinations from '../destinations'
import { DEV } from '../env'

const output: Webpack.Output = {
  publicPath: '/', // You should never forget to define this option. Default does not fit.
  path: destinations.directories.output,
  filename: DEV
    ? '[name].js' // No need hashed names in development.
    : '[name].[hash].js'
}

module.exports = output
