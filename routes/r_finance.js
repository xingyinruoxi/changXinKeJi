'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/finance.html', function(req, res, next) {
    res.render('finance', { title: 'Express',curPage:'首页'});
});

module.exports = router;
