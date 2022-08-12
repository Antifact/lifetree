// const asyncHandler = require('express-async-handler');
// // const Post = require('../models/post');

// const getAllPosts = asyncHandler (async (req, res) => {
//   const posts = await Post.find();
//   res.json(posts)
// });

// const createPost = asyncHandler (async (req, res) => {
//   const { title, content } = req.body;

//   if ( !title || !content ) {
//     res.status(400)
//     throw new Error('Please fill the required fields');
//   } else {
//     const post = new Post({ title, content });

//     const createdPost = await post.save();

//     res.status(201).json(createdPost);
//   }
// });

// module.exports = { getAllPosts, createPost };