import * as CleanPlugin from 'clean-webpack-plugin'
import destinations from '../../../destinations'

module.exports = new CleanPlugin([destinations.directories.output], {
  verbose: true,
  root: destinations.directories.root // Seems like plugin doesn't like absolute paths without specifying root.
})
