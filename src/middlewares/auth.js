const isLogged = (req, res, next) => {

    // res.redirecte("/");

    console.log("isLogged!!!");
    next();
}

module.exports = {
    isLogged
}