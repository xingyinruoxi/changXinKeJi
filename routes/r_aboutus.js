'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/aboutus.html', function(req, res, next) {
    res.render('aboutus', { title: 'Express',curPage:'关于 ABOUT US'});
});

module.exports = router;
