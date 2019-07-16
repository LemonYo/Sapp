const os = require('os')

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
    devConfig: {},
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
