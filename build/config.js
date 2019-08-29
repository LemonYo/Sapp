const os = require('os')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const ip = getIpAdress()

function getIpAdress () {
  let localhost = ''
  try {
    var network = os.networkInterfaces()
    localhost = network[Object.keys(network)[0]][1].address
  } catch (e) {
    console.log(e)
    localhost = 'localhost'
  }
  return localhost
}

module.exports = {
  client: {
    port: 3086,
    publicPath: '',
    devConfig: {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader'
            ]
          },
          {
            test: /\.(scss|sass)$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
          }
        ]
      },
      plugins: [
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin()
      ]
    },
    pordConfig: {}
  },
  server: {
    port: 8080,
    devConfig: {},
    publicPath: '',
    pordConfig: {}
  },
  ipAddress: ip
}
