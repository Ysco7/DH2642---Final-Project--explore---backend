const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Wish = new Schema(
    {
        id: Schema.Types.ObjectId,
        city: {type: Schema.Types.ObjectId, ref: 'city'},
        user: {type: Schema.Types.ObjectId, ref: 'user'}
    }
);

module.exports = mongoose.model('wish', Wish);
