const { getPosts } = require('../controllers/posts-controller');
const express = require('express');
const router = express.Router();

router.get('/posts', getPosts);

module.exports = router;