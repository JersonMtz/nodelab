const LoginPage = (req, res) => {
    res.render('pages/login');
}

const ForgotPage = (req, res) => {
    res.render('pages/forgot-password');
}

const ContactPage = (req, res) => {
    res.render('pages/contact');
}

module.exports = {
    LoginPage,
    ForgotPage,
    ContactPage
}