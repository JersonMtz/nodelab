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

    // usar procedimiento
    res.render('pages/list-users', { users });
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
