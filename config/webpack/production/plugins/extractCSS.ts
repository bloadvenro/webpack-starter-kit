import * as ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
})
