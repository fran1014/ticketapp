const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { log } = require('util');

router.post('/', registerUser);

router.post('/login', loginUser);

module.exports = router;
