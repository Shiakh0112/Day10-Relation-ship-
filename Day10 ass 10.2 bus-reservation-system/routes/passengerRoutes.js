const express = require('express');
const { createPassenger } = require('../controllers/passengerController');

const router = express.Router();

router.post('/passengers', createPassenger);

module.exports = router;