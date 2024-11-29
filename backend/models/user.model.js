// Desc: User model to define the user schema and export the User model

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the user schema
const userSchema = new mongoose.Schema({

    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength:[ 3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength:[ 3, 'Last name must be at least 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength:[ 6, 'Email must be at least 6 characters long'],
    },
    password:{
        type: String,
        required: true,
        select: false,
    },

    socketId:{
        type: String,
    },
});

// Generate an auth token for the user
userSchema.methods.generateAuthToken = function(){
    const user = this;
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    return token;
}


// Compare the entered password with the user password
userSchema.comparePassword = async function(enteredPassword, userPassword){
    return await bcrypt.compare(enteredPassword, userPassword);
}

// Hash the password before saving the user
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

// Create a user model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;