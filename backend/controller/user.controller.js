const userModel = require('../models/user.model');
const { validationResult } = require('express-validator');
const userService = require('../services/user.service');


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