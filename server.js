'use strict';

const knex = require('knex');
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const port = process.env.EXPRESS_CONTAINER_PORT;

const app = express();
const userRoute = require('./routes/users');
const postsRoute = require('./routes/posts');

app.use('/user', userRoute);
app.use('/posts', postsRoute);

app.listen(port, () => {
    console.log(`Express server is listening on Port ${port}.`);
});