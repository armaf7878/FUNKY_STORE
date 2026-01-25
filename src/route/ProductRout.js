const express = require('express');
const router = express.Router();
const ProductController = require('../app/controller/ProductController');

router.get('/showall',  ProductController.showall);
router.post('/create',  ProductController.create);
router.delete('/delete',  ProductController.delete);
router.post('/create_variable',  ProductController.create_variable);
router.delete('/delete_variable',  ProductController.delete_variable);
module.exports = router;