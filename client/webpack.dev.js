var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        main: './client/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: ''
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
                    'postcss-loader',
                    'css-loader'
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
    plugins: [
        new htmlWebpackPlugin({
            title: '省心宝',
            template: './client/index.html'
        })
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