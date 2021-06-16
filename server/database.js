'use strict';
require('dotenv').config()
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(
        console.log('MongoDB database connection established successfully')
    ).catch((err) => console.log(err));
}