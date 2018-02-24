import open = require('open')
import * as WebpackDevServer from 'webpack-dev-server'
import * as webpack from 'webpack'
import * as livereload from 'livereload'
import { Destinations } from '../config/Destinations'
import { webpackDevelopment } from '../config/webpack/development'

process.env.NODE_ENV = 'development'

const { host, port } = webpackDevelopment.configuration.devServer
const compiler = webpack(webpackDevelopment.configuration)
const devServer = new WebpackDevServer(compiler, webpackDevelopment.configuration.devServer)

devServer.listen(port, host, () => {
  open(`http://${host}:${port}/`)

  // Step #3 to achieve .html livereload: watch .html files for changes and notify web pages to reload.
  livereload
    .createServer({
      exts: ['html']
    })
    .watch(Destinations.directories.output)
})
