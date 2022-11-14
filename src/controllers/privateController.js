const User = require('../models/User');

const HomePage = (req, res) => {
    res.render('pages/home');
}

const ChangePasswordPage = (req, res) => {
    res.render('pages/change-password');
}

const ProfilePage = (req, res) => {
    res.render('pages/profile');
}

const ListUsersPage = async (req, res) => {
    try {
        const { users } = await User.list();
        res.render('pages/list-users', { hasError: false, users });
    } catch(msg) {
        res.render('pages/list-users', { hasError: true, msg });
    }
}

const AddUserPage = (req, res) => {
    res.render('pages/add-user');
}

module.exports = {
    HomePage,
    ChangePasswordPage,
    ProfilePage,
    ListUsersPage,
    AddUserPage
}
