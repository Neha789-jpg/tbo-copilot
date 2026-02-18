const express = require('express');
const router = express.Router();

const bookingcontroller = require('../controllers/bookingcontroller.cjs');

router.get('/', bookingcontroller.getBookings);

module.exports = router;
