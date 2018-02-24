import * as webpack from 'webpack'
import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import { Destinations } from '../Destinations'
import { webpackDevelopment } from './development'
import { WebpackConfigurationUtils } from './ConfigurationUtils'

// (Un)comment (un)necessary plugins.
namespace plugins {
  export const cleanOutputDir = webpackDevelopment.plugins.cleanOutputDir
  export const templates = webpackDevelopment.plugins.templates
  export const extractCss = new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
  })
  export const uglifyJs = new UglifyJsPlugin()
  export const define = new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV) // TODO: Investigate!
    }
  })
}

// (Un)comment (un)necessary rules.
// Do not forget to (un)install appropriate loaders!
namespace rules {
  export const css: webpack.Rule = {
    test: /\.css$/,
    use: plugins.extractCss.extract({
      use: [
        {
          loader: require.resolve('css-loader'),
          options: {
            minimize: true
          }
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [require('autoprefixer')()]
          }
        }
        // {
        //   loader: require.resolve('sass-loader')
        //   // loader: require.resolve('less-loader')
        //   // loader: require.resolve('stylus-loader')
        // }
      ]
    })
  }

  export const images: webpack.Rule = {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: 'url-loader',
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

  export const pug = webpackDevelopment.rules.pug
  export const fallback = webpackDevelopment.rules.fallback
}

const configuration: webpack.Configuration = {
  entry: {
    production: [Destinations.directories.assets.scripts]
  },
  resolve: webpackDevelopment.configuration.resolve,
  plugins: WebpackConfigurationUtils.readPlugins(plugins),
  module: {
    rules: WebpackConfigurationUtils.readRules(rules)
  },
  output: {
    ...webpackDevelopment.configuration.output,
    filename: '[name].[hash].js'
  }
}

export const webpackProduction = { configuration }
