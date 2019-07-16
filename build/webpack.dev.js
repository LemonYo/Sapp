var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.js')
var config = require('./config.js')

module.exports = (env, argv) => {
  const name = argv.name || 'client'
  const { port, devConfig } = config[name]
  return merge.smart(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      main: `./${name}/main.js`
    },
    output: {
      path: path.resolve(__dirname, 'dist'), // output 的 path 是一个绝对路径
      filename: '[name].js'
    },
    plugins: [
      new htmlWebpackPlugin({
        template: `./${name}/index.html`
      })
    ],
    devServer: {
      open: true,
      port,
      host: config.ipAddress,
      hot: true,
      proxy: [{
        context: ['/server', '/client'],
        target: `http://${config.ipAddress}:3000`
      }]
    }
  }, devConfig)
}
