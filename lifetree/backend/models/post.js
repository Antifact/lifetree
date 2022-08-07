const mongoose = require('mongoose');
// const Schema = mongoose.Schema

const Post = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Post", Post);