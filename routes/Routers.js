var express = require('express');
var router = express.Router();

router.use('/',  require('./index'));

router.use('/',  require('./r_p2p'));
router.use('/',  require('./r_finance'));
router.use('/',  require('./r_system'));
module.exports = router;
