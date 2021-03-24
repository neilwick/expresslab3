module.exports = () => (req, res, next) => {

    req.login = { user: null };

    if (req.query != null) {
        if (req.query.uname != null) {
            req.login.user = req.query.uname.toLowerCase().trim();
        }
    }

    next();
};
