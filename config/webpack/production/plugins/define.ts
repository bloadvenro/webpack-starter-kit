import * as Webpack from 'webpack'

module.exports = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV) // TODO: Investigate!
  }
})
