const express = require('express');
const { getWishesByUser, createWish, deleteWish } = require("../controllers/wish");
const router = express.Router();

router.get('/:userId', async function(req, res) {
    const { userId } = req.params;

    if (!userId) {
        res.status(400).send();
    }

    const wishes = await getWishesByUser(userId);
    res.json(wishes);
});

router.post('/', async function(req, res) {
    const { userId, cityId } = req.body;

    if (!userId || !cityId) {
        return res.status(400).send();
    }

    await createWish(cityId, userId);
    res.status(201).send();
});

router.delete('/', async function(req, res) {
    const { userId, cityId } = req.body;

    if (!userId || !cityId) {
        return res.status(400).send();
    }

    await deleteWish(cityId, userId);
    res.status(200).send();
});

module.exports = router;
