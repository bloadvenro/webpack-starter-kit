import * as Webpack from 'webpack'
import destinations from '../../destinations'

const entry: Webpack.Entry = {
  production: [destinations.directories.assets.scripts]
}

module.exports = entry
