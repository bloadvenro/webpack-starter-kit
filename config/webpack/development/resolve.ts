import * as Webpack from 'webpack'
import destinations from '../../destinations'

const resolve: Webpack.Resolve = {
  alias: {
    // The way to get rid of '../../xxx' in import statements. All imports will now look like
    // "import Some from '~/components/Some'" and happen relative to the project root. Note that
    // tsconfig.json requires some similar options to configure.
    '~': destinations.directories.assets.scripts
  },
  // (Un)comment (un)necessary extensions.
  extensions: [
    '.json',
    '.js',
    '.pug',
    '.css'
    // '.slim',
    // '.jsx',
    // '.ts',
    // '.tsx',
    // '.sass',
    // '.scss',
    // '.styl',
    // '.less',
  ]
}

module.exports = resolve
