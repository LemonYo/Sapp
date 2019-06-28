var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 文件系统
var open = require('open')
var os = require('os')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 监听特定端口并且自动打开地址
var port = 8080
app.listen(port, function(err) {
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
module.exports = app;