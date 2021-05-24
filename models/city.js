const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const City = new Schema(
    {
        id: Schema.Types.ObjectId,
        name: {type: String, required: true},
        picture: {type: String, required: true},
        country: {type: Schema.Types.ObjectId, ref: 'country'}
    }
);

module.exports = mongoose.model('city', City);
