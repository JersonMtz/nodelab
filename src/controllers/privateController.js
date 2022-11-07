const HomePage = (req, res) => {
    res.render('pages/home');
}

const ChangePasswordPage = (req, res) => {
    res.render('pages/change-password');
}

const ProfilePage = (req, res) => {
    res.render('pages/profile');
}

const ListUsersPage = (req, res) => {

    // usar procedimiento
    const users = [
        {
            id: 1,
            fullName: 'Pepe BD',
            email: 'pepe@mail.com'
        },
        {
            id: 2,
            fullName: 'Marta Cs',
            email: 'csmar@mail.com'
        }
    ]

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
