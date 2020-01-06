const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    singer: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Song', songSchema);

