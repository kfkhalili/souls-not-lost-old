'use strict';
require('dotenv').config()
const express = require("express");
const path = require('path');
const cors = require('cors');

const fileRoutes = require('./routes/fileUploadRoutes');
const authRoutes = require('./routes/authRoutes');
const personRoutes = require('./routes/personRoutes');

const app = express();
app.use(cors());
app.use(express.json());

require('./database')();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);
app.use('/api/auth', authRoutes.routes);
app.use('/api', personRoutes.routes);


// log your server is running and the port
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`Click here to open: http://localhost:${port}`)
});