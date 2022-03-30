const { Router } = require('express');

const router = Router();

const webpayPlus = require('./webpay_plus');

router.use('/', webpayPlus);

module.exports = router;
