import * as Webpack from 'webpack'

module.exports = new Webpack.ProvidePlugin({
  // [opinionated!] Uncomment the line below if you use React.
  // React: 'react' // Provide global React namespace for seamless JSX rendering (no explicit react imports).
})
