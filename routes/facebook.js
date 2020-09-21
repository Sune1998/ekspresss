var express = require('express')
var router =  express.Router()

router.get('/', function(req, res){
    res.render('facebook', {title: express})
})
module.exports = router