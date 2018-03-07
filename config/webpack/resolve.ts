import * as Webpack from 'webpack'
import destinations from '../destinations'

const extensionsMap: { [loader: string]: string | string[] } = {
  'slim-lang-loader': '.slim',
  'pug-loader': '.pug',
  'ts-loader': ['.ts', '.tsx'],
  'babel-loader': '.jsx',
  'sass-loader': ['.sass', '.scss'],
  'stylus-loader': '.styl',
  'less-loader': '.less'
}

const resolve: Webpack.Resolve = {
  alias: {
    // The way to get rid of '../../xxx' in import statements. All imports will now look like
    // "import Some from '~/components/Some'" and happen relative to the project root. Note that
    // tsconfig.json requires some similar options to configure.
    '~': destinations.directories.assets.scripts
  },
  extensions: (function(extensions: string[]) {
    extensions.push('.json')
    extensions.push('.js')
    extensions.push('.css')

    // Automatically enable extensions for installed loaders.
    for (const loader in extensionsMap) {
      try {
        require.resolve(loader)
        extensions = extensions.concat(extensionsMap[loader])
      } catch {}
    }
    return extensions
  })([])
}

module.exports = resolve
