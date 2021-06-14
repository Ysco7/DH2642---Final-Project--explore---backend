const express = require('express');
const { getAllUsers, createUser, login, getUserByEmail } = require("../controllers/user");
const router = express.Router();

router.get('/', async function(req, res) {
    const users = await getAllUsers();
    res.json(users);
});

router.post('/', async function(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send();
    }

    const user = await getUserByEmail(email);
    if (user) {
        return res.status(409).send();
    }

    await createUser(email, password)
    res.status(201).send();
});

router.post('/login', async function(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send();
    }

    const user = await login(email, password);
    if (user.length === 0) {
        return res.status(404).send();
    }
    delete user[0].password;
    res.json(user[0]);
});

module.exports = router;
