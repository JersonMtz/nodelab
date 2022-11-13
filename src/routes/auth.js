const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const { isLogged } = require('../middlewares/auth');

router.get('/login', [isLogged], AuthController.LoginPage);

router.get('/forgot-password', AuthController.ForgotPage);

module.exports = router;