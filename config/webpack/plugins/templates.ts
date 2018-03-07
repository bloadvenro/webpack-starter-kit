import * as HtmlPlugin from 'html-webpack-plugin'
import destinations from '../../destinations'
import { basename, extname } from 'path'

module.exports = destinations.templates.templatesList.map(
  template =>
    new HtmlPlugin({
      template,
      filename: basename(template, extname(template)) + '.html'
    })
)
