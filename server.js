'use strict';

const knex = require('knex');
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const port = process.env.EXPRESS_CONTAINER_PORT;

const app = express();

app.use('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Express server is listening on Port ${port}.`);
});