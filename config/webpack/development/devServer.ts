import * as WebpackDevServer from 'webpack-dev-server'
import * as injectLivereloadScriptTag from 'connect-livereload'

const devServer: WebpackDevServer.Configuration = {
  before(app: any) {
    // Step #2 to achieve .html livereload:
    // inject livereload.js into html files before transferring to browser. [#3 -> bin/start.ts]
    app.use(injectLivereloadScriptTag())
  },
  hot: true,
  historyApiFallback: true, // For html5 history API to work.
  stats: {
    colors: true
  },
  overlay: true,
  host: '0.0.0.0',
  port: 9000
}

module.exports = devServer
