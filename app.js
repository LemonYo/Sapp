var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
// 文件系统
var open = require('open')
var os = require('os')

var clientRouter = require('./routes/client')
var serverRouter = require('./routes/server')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/client', indexRouter)
app.use('/users', usersRouter)

// 监听特定端口并且自动打开地址
var port = 3000
app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var localhost = ''
  try {
    var network = os.networkInterfaces()
    localhost = network[Object.keys(network)[0]][1].address
  } catch (e) {
    console.log(e)
    localhost = 'localhost'
  }
  var url = 'htpp://' + localhost + ':' + port
  console.log('server started at ' + url)
  open(url, 'chrome')
})
module.exports = app
