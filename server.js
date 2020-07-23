'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

require('dotenv').config();

const port = process.env.EXPRESS_CONTAINER_PORT;

const app = express();

app.use('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Express server is listening on Port ${port}.`);
});