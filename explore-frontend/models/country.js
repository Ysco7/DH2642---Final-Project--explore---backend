const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Country = new Schema(
    {
        id: Schema.Types.ObjectId,
        name: {type: String, required: true},
        picture: {type: String, required: true}
    }
);

module.exports = mongoose.model('country', Country);
