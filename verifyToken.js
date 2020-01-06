const jwt = require('jsonwebtoken');

module.exports = function verify(req, res, next) {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Access Denied');
    }

    try {
        const verified = jwt.verify(token, 'secret_sdfsgsgssefasfsgsg');
        req.user = verified;
        next();
    } catch (e) {
        res.status(400).send('Invalid Token');
    }
};