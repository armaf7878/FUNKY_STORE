const express = require('express');
const router = express.Router();
const OrderController = require('../app/controller/OrderController');

router.post('/create', OrderController.create);

module.exports = router