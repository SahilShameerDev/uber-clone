// Desc: User routes to handle user related operations

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller.js');

// Register a new user
router.post('/register', [
    
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

], userController.registerUser)

// User login
router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.loginUser)


module.exports = router;