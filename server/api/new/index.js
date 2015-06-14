'use strict';

var express = require('express');
var controller = require('./new.controller');

var router = express.Router();

router.get('/test', controller.index);

module.exports = router;