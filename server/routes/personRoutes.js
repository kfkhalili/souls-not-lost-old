'use strict';
const express = require('express');
const router = express.Router();

const {getPersons, newPerson} = require('../controllers/personController.js');

router.get('/person', getPersons);
router.post('/person', newPerson);

module.exports = {
    routes: router
}