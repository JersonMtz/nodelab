const express = require('express');
const router = express.Router();
const private = require('../controllers/privateController');

router.get('/dashboard', private.HomePage);

router.get('/dashboard/profile', private.ProfilePage);

router.get('/dashboard/change-password', private.ChangePasswordPage);

router.get('/dashboard/list-users', private.ListUsersPage);

router.get('/dashboard/add-user', private.AddUserPage);

module.exports = router;