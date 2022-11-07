const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/login', auth.LoginPage);

router.get('/forgot-password', auth.ForgotPage);

module.exports = router;