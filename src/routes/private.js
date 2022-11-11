const express = require('express');
const router = express.Router();
const PrivateController = require('../controllers/privateController');

router.get('/dashboard', PrivateController.HomePage);


// VIEW PAGES PROFILE
router.get('/dashboard/profile', PrivateController.ProfilePage);

router.get('/dashboard/profile/change-password', PrivateController.ChangePasswordPage);


// VIEWS PAGES USERS
router.get('/dashboard/user/list', PrivateController.ListUsersPage);

router.get('/dashboard/user/add', PrivateController.AddUserPage);

module.exports = router;