const {getAllPosts} = require('../utils/posts-utils');

const getPosts = (req, res) => {
  getAllPosts().exec((err, posts) => {
    if (err) {
      res.status(500);
      return res.json({error: err.post});
    } else {
      res.status(200);
      res.send(posts);
    }
  });
}

module.exports = {getPosts};