const express = require('express');
const { createOperator } = require('../controllers/operatorController');

const router = express.Router();

router.post('/operators', createOperator);

module.exports = router;