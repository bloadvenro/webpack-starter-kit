import * as Webpack from 'webpack'
import destinations from '../destinations'
import { DEV } from '../env'

const { host, port } = require('./devServer')

const entry: Webpack.Entry = {
  main: DEV
    ? (function(entry: string[]) {
        entry.push(
          // Additions below are the standard boilerplate for HMR to work properly when using NodeJS API startup.
          // For each entry place it before application scripts like [...hotReplacementCode, <your scripts>].
          // Read why there is no `inline: true` for webpack-dev-server NodeJS API:
          // https://github.com/webpack/docs/wiki/webpack-dev-server#inline-mode-with-nodejs-api
          'webpack/hot/only-dev-server', // Stuff for accepting and applying changes.
          `webpack-dev-server/client?http://${host}:${port}`
        )
        try {
          entry.push(require.resolve('react-hot-loader/patch'))
        } catch {}
        entry.push(destinations.directories.assets.scripts)
        return entry
      })([])
    : [destinations.directories.assets.scripts]
}

module.exports = entry
