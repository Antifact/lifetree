import React from 'react';

const PostDetails = ({ post }) => {
  return (
    <div className='postDetails'>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.createdAt}</p>
    </div>
  );
};

export default PostDetails;