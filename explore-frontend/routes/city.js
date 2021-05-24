const express = require('express');
const { getCitiesByCountry, createCity, getHotCities } = require("../controllers/city");

const router = express.Router();

router.get('/', async function(req, res) {
    const { countryId } = req.query;

    if (!countryId) {
        return res.status(400).send();
    }

    const cities = await getCitiesByCountry(countryId);
    res.json(cities);
});

router.post('/', async function(req, res) {
    const { name, picture, country } = req.body;

    if (!name || !picture) {
        return res.status(400).send();
    }

    await createCity(name, picture, country);
    res.status(201).send();
});

router.get('/hot', async function(req, res) {
    const cities = await getHotCities();
    res.json(cities);
});

module.exports = router;
