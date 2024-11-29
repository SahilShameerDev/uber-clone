// Desc: Main entry point of the application

const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express();
const cors = require('cors');
const connectDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);

module.exports = app;
