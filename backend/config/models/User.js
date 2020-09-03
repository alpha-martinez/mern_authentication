const mongoose = require('mongoose');
const Scehma =  mongoose.Scehma;

const UserScehma = new Scehma({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('User', UserSchema);