const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return next("Please login to access.")
        }
        const verify = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = await userModel.findById(verify.id);
        next();
    }
    catch (error) {
        return next(error);
    }
    
}

module.exports = isAuth;