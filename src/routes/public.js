const express = require('express');
const router = express.Router();
const PublicController = require('../controllers/publicController');
const { isLogged } = require('../middlewares/auth');

router.get('/login', [isLogged], PublicController.LoginPage);
router.get('/forgot-password', PublicController.ForgotPage);
router.get('/contact', PublicController.ContactPage);

module.exports = router;