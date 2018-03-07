import * as Webpack from 'webpack'

const typescriptRule: Webpack.Rule = {
  test: /\.tsx?$/,
  loaders: [
    // Uncomment the line below if you use React.
    // require.resolve('react-hot-loader/webpack'),
    require.resolve('ts-loader')
  ]
}

module.exports = typescriptRule
