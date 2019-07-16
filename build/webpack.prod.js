var webpack = require('webpack')
var path = require('path')
var config = require('./config.js')

var htmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.js')

module.exports = (env, argv) => {
  const name = argv.name || 'client'
  const { publicPath, pordConfig } = config[name]
  return merge.smart(baseConfig, {
    mode: 'production',
    entry: {
      main: `./${name}/main.js`
    },
    output: {
      filename: '[name].[contenthash:8].js',
      path: path.resolve(`./public/${name}`),
      publicPath: publicPath || ''
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        }
      ]
    },
    optimization: {
      // 压缩 css js
      minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin({})],
      // 公共代码提取
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      // 重新打包时删除原来的文件
      // new CleanWebpackPlugin(),
      new htmlWebpackPlugin({
        template: `./${name}/index.html`
      }),
      // 对于生产环境构建，建议从 bundle 中提取 CSS，以便之后可以并行加载 CSS/JS 资源。可以通过使用 mini-css-extract-plugin 来实现，在生产环境模式运行中提取 CSS。
      new MiniCssExtractPlugin({
        filename: 'css/app.[contenthash:8].css'
      })
    ]
  }, pordConfig)
}
