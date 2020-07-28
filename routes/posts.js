'use strict';

const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Posts = require('../database/models/Posts');

router.get('/', (req, res) => {
    res.send('post route smoke test')
})

module.exports = router;