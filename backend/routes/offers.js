var express = require('express');
var router = express.Router();
var offers = require('../offers.json');
var properties = require('../properties.json');

/* GET offers listing. */
router.get('/', function(req, res, next) {
  res.json(offers);
  res.json(properties);
});


module.exports = router;
