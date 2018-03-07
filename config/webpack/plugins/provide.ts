import * as Webpack from 'webpack'

module.exports = new Webpack.ProvidePlugin(
  (function(list: any) {
    try {
      require.resolve('react')
      list['React'] = 'react' // Provide global React namespace for seamless JSX rendering (no explicit react imports)
    } catch {}
    return list
  })({})
)
