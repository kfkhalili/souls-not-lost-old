'use strict';
const express = require('express');
const {register, login} = require('../controllers/userController.js');
const router = express.Router();

router.post('/register', register);
router.post('/auth', login);

module.exports = {
    routes: router
}