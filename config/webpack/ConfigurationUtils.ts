import * as webpack from 'webpack'
import { Destinations } from '../Destinations'

export namespace WebpackConfigurationUtils {
  // Takes all exported rules from rules namespace and returns them with fallback as the last one.
  export function readRules(rulesNamespace: { [name: string]: webpack.Rule }): webpack.Rule[] {
    return [
      {
        include: Destinations.directories.source, // Restrict loaders eyesight to the source directory only.
        oneOf: Object.keys(rulesNamespace)
          .filter(ruleName => ruleName !== 'fallback') // This rule must be at the end.
          .map(ruleName => rulesNamespace[ruleName])
          .concat(rulesNamespace.fallback)
      }
    ]
  }
  // Takes all exported plugins from plugins namespace and returns normalized array (e.g. flattens
  // list of htmlWebpackPlugins).
  export function readPlugins(pluginsNamespace: {
    [name: string]: webpack.Plugin | webpack.Plugin[]
  }): webpack.Plugin[] {
    return Object.keys(pluginsNamespace)
      .map(pluginName => pluginsNamespace[pluginName])
      .reduce((plugins: webpack.Plugin[], plugin) => {
        Array.isArray(plugin) ? plugins.push(...plugin) : plugins.push(plugin)
        return plugins
      }, [])
  }
}
