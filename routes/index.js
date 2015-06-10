var express = require('express');
var router = express.Router();
var ballin = require('../models/ballin.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Are We Ballin Today?', ballin: ballin.status, time: ballin.time });
});

module.exports = router;
