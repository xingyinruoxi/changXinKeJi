'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/p2p.html', function(req, res, next) {
    res.render('p2p', { title: 'Express',curPage:'首页'});
});

module.exports = router;
