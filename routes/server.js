var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, '../public/server/index.html'))
})

module.exports = router
