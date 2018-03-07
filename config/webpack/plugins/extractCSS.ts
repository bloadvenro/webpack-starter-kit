import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import { DEV } from '../../env'

module.exports = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: DEV
})
