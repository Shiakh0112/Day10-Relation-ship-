const express = require('express');
const { createBus } = require('../controllers/busController');

const router = express.Router();

router.post('/buses', createBus);

module.exports = router;