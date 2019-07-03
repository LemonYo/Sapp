var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        main: './client/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // oupt 的 path 是一个绝对路径
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new htmlWebpackPlugin({template: './client/index.html'})
    ],
    devServer: {
        open: true,
        port: 3086,
        host: '192.168.0.8',
        hot: true,
        proxy: [{
            context: ["/server", "/client"],
            target: "http://localhost:3000",
        }]
    }
}