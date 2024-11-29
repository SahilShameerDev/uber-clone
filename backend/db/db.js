// Initiate connection to the database

const mongoose = require('mongoose');

// Connect to the database
function connectDb(){
    mongoose.connect(process.env.DB_CONNECT).then(() => {
            console.log('Connected to DB');
     }).catch((err) => console.log('DB error: ',err));
}

module.exports = connectDb;