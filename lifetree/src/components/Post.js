import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>{post.user}</p>
      <Link to={`${post.id}`}>View</Link>
    </>
  )
}

export default Post;