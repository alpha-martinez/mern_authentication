require('dotenv').config();
const mongoose = require('mongoose');
// const MONGO_URI = process.env.MONGO_URI;

//Mongo connection
mongoose.connection(process.env.MONGO_URI, {
    useNewUrlParaer: true, 
    useUnifiedTopology: true,
    useFindAndModify: true
});

// Mongoose connection obhect 
const db = mongoose.connection;

//set up an event listener to fire once when the connections 'opens'
//console log what host and part its running on
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})

db.on('error', (error) => {
    console.log(`Database error\n${error}`);
})

module.exports.User = require('./User');