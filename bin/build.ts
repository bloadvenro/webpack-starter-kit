import * as Webpack from 'webpack'

process.env.NODE_ENV = 'production'

const webpackConfig = require('../config/webpack/production')

Webpack(webpackConfig, (err, webpackStats) => {
  if (err) {
    return console.log(err)
  }

  // Show the same colorized output as you usually see in the console.
  console.log(webpackStats.toString({ colors: true }))
})
