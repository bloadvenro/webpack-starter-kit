import * as Webpack from 'webpack'
import { scanLoaders } from '../../__helpers__'

const preprocessorData = scanLoaders(
  [
    [
      /\.pug$/,
      [
        {
          loader: 'pug-loader', // Do not forget to `yarn add -D pug`!
          options: {
            pretty: true
          }
        }
      ]
    ],
    [
      /\.slim$/,
      [
        {
          loader: 'html-loader'
        },
        {
          loader: 'slim-lang-loader' // Do not forget to `gem install slim`!
        }
      ]
    ]
  ]
) || [
  /\.html$/,
  [
    {
      loader: 'html-loader'
    }
  ]
]

const templatesRule: Webpack.Rule = {
  test: preprocessorData[0],
  use: (function(loaders: Webpack.Loader[]) {
    loaders.push(...preprocessorData[1])
    return loaders
  })([])
}

module.exports = templatesRule
