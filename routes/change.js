var express = require('express');
var router = express.Router();
var ballin = require('../models/ballin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query.status);
  ballin.status = req.query.status;
  ballin.time = req.query.time;
  res.render('index', { title: 'Are We Ballin Today?', status: ballin.status, time: ballin.time });
});

module.exports = router;
