import open = require('open')
import * as WebpackDevServer from 'webpack-dev-server'
import * as webpack from 'webpack'
import * as livereload from 'livereload'
import destinations from '../config/destinations'

process.env.NODE_ENV = 'development'

const webpackConfig = require('../config/webpack')
const { host, port } = webpackConfig.devServer
const compiler = webpack(webpackConfig)
const devServer = new WebpackDevServer(compiler, webpackConfig.devServer)

devServer.listen(port, host, () => {
  open(`http://${host}:${port}/`)

  // Step #3 to achieve .html livereload: watch .html files for changes and notify web pages to reload.
  livereload
    .createServer({
      exts: ['html']
    })
    .watch(destinations.directories.output)
})
