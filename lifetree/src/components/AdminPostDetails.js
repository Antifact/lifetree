import React from 'react';
import Button from 'react-bootstrap/Button'

const AdminPostDetails = ({ post }) => {

  // fetch the posts from the database, and delete the 
  // respective post by getting it by id
  const handleClick = async () => {
    await fetch('/posts/' + post._id, {
      method: 'DELETE'
    })

    console.log('deleted post id: ' + post._id);
  }
  
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
        <p className='post-date'>Posted on: {date} at {time}</p>
        <br />
        <Button variant="danger" onClick={handleClick}>Delete</Button>
      </div>
      <br />
      <br />
    </div>
    
    : 
      <div>
        <div className='post-details'>
          <p>No posts to moderate!</p>
        </div>
    </div>
  }
  </>
  );
};

export default AdminPostDetails;