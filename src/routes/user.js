const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/user/create', UserController.Create);

module.exports = router;