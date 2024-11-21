const express = require('express');
const { createReservation } = require('../controllers/reservationController');

const router = express.Router();

router.post('/reservations', createReservation);

module.exports = router;