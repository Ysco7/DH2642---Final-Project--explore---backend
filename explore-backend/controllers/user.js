const User = require('../models/user');
const crypto = require('crypto');

async function getAllUsers() {
    const users = await User.find({}).exec();
    return users;
}

async function createUser(email, password) {
    const md5 = crypto.createHash('md5');
    const newPassword = md5.update(password).digest('hex');

    const result = await new User({email, password: newPassword}).save();
    return result;
}

async function login(email, password) {
    const md5 = crypto.createHash('md5');
    const newPassword = md5.update(password).digest('hex');

    const user = await User.find({ email, password: newPassword }).exec();
    return user;
}

module.exports = {
    getAllUsers,
    createUser,
    login
}
