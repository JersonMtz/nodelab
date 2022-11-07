const LoginPage = (req, res) => {
    res.render('pages/login');
}

const ForgotPage = (req, res) => {
    res.render('pages/forgot-password');
}

module.exports = {
    LoginPage,
    ForgotPage,
};