const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PurchaseItem = new Schema({
        status: {type: Schema.Types.Number, default: 0},
        quantitySelected: {type: Schema.Types.Number},
        user: {type: Schema.Types.ObjectId, ref: 'user'},
        product: {type: Schema.Types.ObjectId, ref: 'product'},
        purchase: {type: Schema.Types.ObjectId, ref: 'purchase'}
    },
    {collection: 'purchaseItem'}
)

module.exports = mongoose.model("purchaseItem", PurchaseItem);