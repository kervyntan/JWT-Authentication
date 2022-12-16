const express = require('express');
const route = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// import userModel
const userModel = require("../models/userModel");

// User register route:
route.post("/register", async (req, res) => { 
    try {
        const { name, email, password } = req.body;
        // if user did not key in either one of the credentials
        if (!name || !email || !password) {
            return res.json({ message : "Please enter all the details. "})
        }

        // Verify if the user exist
        const userExist = await userModel.findOne({ email : req.body.email })
        if (userExist) {
            return res.json({ message : "User already exist with the given email"})
        }

        // Password encryption
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        // Assign hashed password to the req.body
        req.body.password = hashPassword;

        // Save user to db
        const user = new userModel(req.body);
        await user.save();

        // create JWT Token and use the secret key in env
        const token = await jwt.sign({ id : user._id }, process.env.SECRET_KEY, {
            expiresIn : process.env.JWT_EXPIRE,
        });

    }

    catch {

    }
})

// User login route:
route.post("/login", (req, res) => {

})

// GET user's data
route.get('/user', (req, res) => {

})