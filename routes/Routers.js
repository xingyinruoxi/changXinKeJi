var express = require('express');
var router = express.Router();

router.use('/',  require('./index'));

router.use('/',  require('./r_p2p'));
module.exports = router;
