const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const config = require('./webpack.config.base')


config.output.publicPath = '/'
config.plugins = [

  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../index.html'),
    inject: true
  })
]

module.exports = config