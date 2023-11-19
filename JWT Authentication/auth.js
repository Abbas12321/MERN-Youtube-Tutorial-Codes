const jwt = require("jsonwebtoken");
const config = require('./config');

function generateToken(user) {
    return jwt.sign(user, config.secretKey);
}

function verifyToken(req, res, next) {
    const token = req.cookies.token || '';

    jwt.verify(token, config.secretKey , (err, user) =>{
        if(err){
            return res.redirect('/login');
        }

        req.user = user;
        next();
    });
}

module.exports = {
    generateToken,
    verifyToken,
};