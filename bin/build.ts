import * as webpack from 'webpack'
import { webpackProduction } from '../config/webpack/production'

process.env.NODE_ENV = 'production'

webpack(webpackProduction.configuration, (err, webpackStats) => {
  if (err) {
    return console.log(err)
  }

  // Show the same colorized output as you usually see in the console.
  console.log(webpackStats.toString({ colors: true }))
})
