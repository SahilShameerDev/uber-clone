const userModel = require('../models/user.model');
const { validationResult } = require('express-validator');
const userService = require('../services/user.service');

// Register a new user
module.exports.registerUser = async (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Get user details
    const { fullname, email , password } = req.body;

    

    // Hash the password
    const hashedPassword = await userModel.hashPassword(password);
    

    // Create a new user
    const user = await userService.createUser({ firstname:fullname.firstname, lastname:fullname.lastname, email:email, password: hashedPassword });

    const token = user.generateAuthToken();


    res.status(201).json( {token,user} );
}

// User login
module.exports.loginUser = async (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Get user details
    const { email, password } = req.body;

    // Find the user by email
    const user = await userModel.findOne({ email }).select('+password');

    // Check if the user exists
    if (!user) {
        return res.status(402).json({ message: 'User not found' });
    }

    // Compare the entered password with the user password
    const isMatch = await user.comparePassword(password);

    // Check if the password is correct
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    const token = user.generateAuthToken();

    res.status(200).json({ token, user });
}