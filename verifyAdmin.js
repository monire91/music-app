const jwt = require('jsonwebtoken');
/*
    types
    user  -> 0
    admin -> 1
 */

module.exports = function verifyAdmin(req, res, next) {

    console.log(req.header('type'));
    const type = req.header('type');
    if (type === '1') {
        next();
    } else {
        return res.status(401).send('Only admins have access to this');
    }


};