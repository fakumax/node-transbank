const { Router } = require('express');

const router = Router();

const webpayPlus = require('./webpay_plus');

router.use('/webpay_plus', webpayPlus);

module.exports = router;
