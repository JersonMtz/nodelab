const express = require('express');
const router = express.Router();
const public = require('../controllers/publicController');

router.get('/contact', public.ContactPage);

module.exports = router;