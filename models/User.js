const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 6,
        max: 225
    },
    type: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);

