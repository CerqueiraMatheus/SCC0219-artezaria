const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
            title: {type: String},
            description: {type: String},
            price: {type: Number},
            image: {type: String},
            quantityInStock: {type: Number},
            quantitySelected: {type: Number},
            quantitySold: {type: Number},
            artist: {type: Schema.Types.ObjectId, ref: 'user'},
    },
    {collection: 'product'}
)

module.exports = mongoose.model("product", Product);