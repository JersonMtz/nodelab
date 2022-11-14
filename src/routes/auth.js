const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

router.get('/login', AuthController.LoginPage);

router.get('/forgot-password', AuthController.ForgotPage);

module.exports = router;