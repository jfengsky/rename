const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist/static/'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: [
                'babel-loader',
            ],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    devtool: 'source-map',
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html')
        })
    ]
}