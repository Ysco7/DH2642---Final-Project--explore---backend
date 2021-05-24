const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        id: Schema.Types.ObjectId,
        email: {type: String, required: true},
        password: {type: String, required: true}
    }
);

module.exports = mongoose.model('user', User);
