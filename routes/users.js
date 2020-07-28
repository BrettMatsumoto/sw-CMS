'use strict';

const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Posts = require('../database/models/Posts');

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

//GET user by user_id with posts
router.route('/:id').get((req, res) => {
    new User({ id: req.params.id })
        .fetch({ withRelated: ['posts'] })
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log(err);
        })
});

//GET all posts from user
router.route('/posts/:userId').get((req, res) => {
    Posts.where({ userId: req.params.userId })
        .fetchAll()
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log('error:', err);
        });
});


module.exports = router;