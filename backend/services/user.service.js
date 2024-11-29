// Desc: User service to handle user related operations

const userModel = require('../models/user.model');

// Create a new user
module.exports.createUser = async ({firstname, lastname, email, password}) => {
    
    // Check if all fields are provided
    if(!firstname || !email || !password) throw new Error('All fields are required');

    // add user to database
    const user = new userModel({fullname: {firstname, lastname}, email, password});

    // Save the user to the database
    await user.save();

    return user;

}

