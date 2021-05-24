const Country = require('../models/country');

async function getAllCountry() {
    const countries = await Country.find({}).exec();
    return countries;
}

async function createCountry(name, picture) {
    const result = await new Country({name, picture}).save();
    return result;
}

module.exports = {
    getAllCountry,
    createCountry
}
