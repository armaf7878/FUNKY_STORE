const express = require('express');
const router = express.Router();
const adminController = require('../controller/AdminController');
const {verifyTokenAndAdmin} = require('../middleware/auth');

router.use(verifyTokenAndAdmin);


router.get('/dashboard', adminController.getDashboard);


router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserDetail);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);
router.post('/users/create-staff', adminController.createStaff);


router.get('/orders', adminController.getAllOrders);
router.get('/orders/:id', adminController.getOrderDetail);
router.put('/orders/:id/status', adminController.updateOrderStatus);
router.put('/orders/:id/payment-status', adminController.updatePaymentStatus);
router.delete('/orders/:id', adminController.deleteOrder);


router.get('/products', adminController.getAllProducts);
router.get('/products/low-stock', adminController.getLowStockProducts);
router.get('/products/:id', adminController.getProductDetail);
router.put('/products/:id', adminController.updateProduct);
router.put('/product-variants/:id', adminController.updateProductVariant);


router.put('/categories/:id', adminController.updateCategory);
router.get('/categories/:id/products', adminController.getCategoryProducts);


router.get('/reports/revenue', adminController.getRevenueReport);
router.get('/reports/best-sellers', adminController.getBestSellers);
router.get('/reports/customers', adminController.getCustomerReport);

module.exports = router;