'use strict';
const express = require('express');
const router = express.Router();

const {register, login, verifyUser} = require('../controllers/authController.js');

router.post('/register', register);
router.post('/login', login);
router.get('/confirm/:confirmationCode', verifyUser);

module.exports = {
    routes: router
}