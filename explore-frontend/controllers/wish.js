const Wish = require('../models/wish');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

async function getWishesByUser(userId) {
    const wishes = Wish.aggregate([
        {
            $lookup: {
                from: "cities",
                localField: "city",
                foreignField: "_id",
                as: "cities"
            }
        },
        {
            $match:{
                user: ObjectId(userId)
            }
        },
    ]).exec();
    return wishes;
}

async function createWish(city, user) {
    const result = await new Wish({city, user}).save();
    return result;
}

async function deleteWish(city, user) {
    const result = await Wish.deleteOne({ city, user }).exec();
    return result;
}

module.exports = {
    getWishesByUser,
    createWish,
    deleteWish
}
