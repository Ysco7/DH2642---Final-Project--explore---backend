const City = require('../models/city');

async function getCitiesByCountry(countryId) {
    const cities = await City.find({ country: countryId }).exec();
    return cities;
}

async function createCity(name, picture, country) {
    const result = await new City({name, picture, country}).save();
    return result;
}

async function getHotCities() {
    const cities = await City.find({}).exec();
    return cities;
}

module.exports = {
    getCitiesByCountry,
    createCity,
    getHotCities
}
