const Post = require('../models/post');

const getAllPosts = () => {
  return Post.find()
}

module.exports = {getAllPosts};