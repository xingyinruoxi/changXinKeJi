'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/system.html', function(req, res, next) {
    res.render('system', { title: 'Express',curPage:'首页'});
});

module.exports = router;
