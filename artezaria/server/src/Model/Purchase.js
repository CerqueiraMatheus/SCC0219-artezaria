const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Purchase = new Schema({
        data: {type: Schema.Types.Date, default: Date.now},
        user: {type: Schema.Types.ObjectId, ref: 'user'},
        total: {type: Schema.Types.Number}
    },
    {collection: 'purchase'}
)

module.exports = mongoose.model("purchase", Purchase);