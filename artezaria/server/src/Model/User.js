const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserTypes = require('../Util/UserTypes');

let User = new Schema({
        name: {type: String},
        lastName: {type: String},
        email: {type: String, unique: true},
        password: {type: String},
        address: {type: String},
        description: {type: String},
        type: {type: Number, default: UserTypes.CLIENT},
    },
    {collection: 'user'}
);

module.exports = mongoose.model("user", User);