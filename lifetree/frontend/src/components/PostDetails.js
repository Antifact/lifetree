import React from 'react';

const PostDetails = ({ post }) => {
  
  // formatting of the date from mongoose to look nicer 
  const date = post.createdAt.substring(0, 10);
  const time = post.createdAt.substring(11, 16);

  return (
    <>
    {/* if there are posts, display them. if not, create a default page for the viewer to see */}
    { post ?
    <div>
      <div className='post-details'>
        <h2>{post.title}</h2>
        <p className='post-content'>{post.content}</p>
        <p className='post-date'>Posted on: {date} at {time}</p>
      </div>
      <br />
      <br />
    </div>
    
    : 
      <div>
        <div className='post-details'>
          <h2>Welcome to our site!</h2>
          <p>Look forward to some more posts from us soon!</p>
        </div>
    </div>
  }
  </>
  );
};

export default PostDetails;