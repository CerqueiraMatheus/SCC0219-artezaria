const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
        name: {type: String},
        lastName: {type: String},
        email: {type: String, unique: true},
        password: {type: String},
        address: {type: String},
        description: {type: String},
        type: {type: Number},
    },
    {collection: 'user'}
);

module.exports = mongoose.model("user", User);