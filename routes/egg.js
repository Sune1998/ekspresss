var express = require('express')
var router =  express.Router()

router.get('/', function(req, res){
    res.render('egg', {title: express})
})
module.exports = router