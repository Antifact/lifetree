// import mongoose to create schema
const mongoose = require('mongoose');

// shorthand
const Schema = mongoose.Schema;

// define schema for database. requires a title and content to be entered
// also posts timestamps for when posts are created via mongoose
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;