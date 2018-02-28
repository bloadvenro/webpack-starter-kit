import * as WriteFilePlugin from 'write-file-webpack-plugin'

module.exports = new WriteFilePlugin({
  test: /\.html$/ // Step #1 to achieve .html livereload: write html files on disk. [#2 -> devServer.setup]
})
