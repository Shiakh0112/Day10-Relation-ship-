const express = require('express');
const { createRoute } = require('../controllers/routeController');

const router = express.Router();

router.post('/routes', createRoute);

module.exports = router;