const express = require('express');
const { signupController, loginController } = require('../controllers/AccessControllers');
const { ViewProductAdmin, UpdateProductAdmin, FindDiscount, AddProductAdmin } = require('../controllers/AccessProductController');
const { ViewInvoiceAdmin, AddInvoice, ViewInvoice } = require('../controllers/AccessInvoiceControllers');

const router = express.Router()

router.route('/signup').post(signupController);
router.route('/login').post(loginController);
router.route('/admin-productlst').post(ViewProductAdmin);
router.route('/admin-productupdate').post(UpdateProductAdmin);
router.route('/find-discount').post(FindDiscount);
router.route('/admin-addproduct').post(AddProductAdmin);
router.route('/addInvoice').post(AddInvoice);
router.route('/viewInvoice').post(ViewInvoice);
router.route('/admin-viewInvoice').post(ViewInvoiceAdmin);

module.exports = router;