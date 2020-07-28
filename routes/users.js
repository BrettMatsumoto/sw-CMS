'use strict';

const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Posts = require('../database/models/Posts');

//Route Test

router.get('/', (req, res) => {
    res.send('user route test completed successfully')
});

//GET all users

router.route('/all').get((req, res) => {
    new User()
        .fetchAll({ withRelated: ['roles'] })
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log('error:', err);
        });
});

//GET user by user_id
router.route('/:id').get((req, res) => {
    new User({ id: req.params.id })
        .fetch({ withRelated: ['roles'] })
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log('error:', err);
        })
});

module.exports = router;