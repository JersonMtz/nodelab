const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.post('/user/create', user.Create);

module.exports = router;