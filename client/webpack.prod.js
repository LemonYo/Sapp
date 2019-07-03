var webpack = require ('webpack')
var path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var htmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './client/main.js',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve('./public/client'),
    publicPath: './'
  },
  module: {
    rules:  [
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // 将小体积 PNG/JPG/GIF/SVG 图像转为像字体那样的 Data URL 嵌入，并复制较大的文件到输出目录。
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  optimization: {
    // 删除未引用的js 代码并且压缩代码
    minimizer: [new UglifyJsPlugin()],
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
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './client/index.html'
    }),
    // 对于生产环境构建，建议从 bundle 中提取 CSS，以便之后可以并行加载 CSS/JS 资源。可以通过使用 mini-css-extract-plugin 来实现，在生产环境模式运行中提取 CSS。
    new MiniCssExtractPlugin({
      filename: "app.[contenthash:8].css"
    })
  ]
}