const express = require('express');
const router = express.Router();
const PublicController = require('../controllers/publicController');

router.get('/contact', PublicController.ContactPage);

module.exports = router;