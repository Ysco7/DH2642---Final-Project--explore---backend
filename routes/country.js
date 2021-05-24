const express = require('express');
const { getAllCountry, createCountry } = require("../controllers/country");
const router = express.Router();

router.get('/', async function(req, res) {
    const countries = await getAllCountry();
    res.json(countries);
});

router.post('/', async function(req, res) {
    const { name, picture } = req.body;

    if (!name || !picture) {
        return res.status(400).send();
    }

    await createCountry(name, picture);
    res.status(201).send();
});

module.exports = router;
