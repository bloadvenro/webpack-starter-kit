import * as Webpack from 'webpack'
import destinations from '../../destinations'

const { host, port } = require('./devServer')

const entry: Webpack.Entry = {
  development: [
    // Additions below are the standard boilerplate for HMR to work properly when using NodeJS API startup.
    // For each entry place it before application scripts like [...hotReplacementCode, <your scripts>].
    // Read why there is no `inline: true` for webpack-dev-server NodeJS API:
    // https://github.com/webpack/docs/wiki/webpack-dev-server#inline-mode-with-nodejs-api
    'webpack/hot/only-dev-server', // Stuff for accepting and applying changes.
    `webpack-dev-server/client?http://${host}:${port}`,
    // -----------------------------------------------------------------------------------------------------------
    destinations.directories.assets.scripts
    // Uncomment the line below if you use React.
    // require.resolve('react-hot-loader/patch')
  ]
}

module.exports = entry
