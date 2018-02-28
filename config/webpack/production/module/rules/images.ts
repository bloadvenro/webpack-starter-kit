import * as Webpack from 'webpack'

const imagesRule: Webpack.Rule = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    {
      loader: require.resolve('url-loader'),
      options: {
        limit: 8192
      }
    },
    {
      loader: require.resolve('image-webpack-loader'),
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        optipng: {
          enabled: false
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        gifsicle: {
          interlaced: false
        }
        // WARNING: This feature has very pure browser support! E.g. firefox doesn't support webp.
        // webp: {
        //   quality: 75
        // }
      }
    }
  ]
}

module.exports = imagesRule
