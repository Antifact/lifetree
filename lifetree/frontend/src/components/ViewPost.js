import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

// This page is busted, but the idea is to retrieve the individual post by the id that it is given and serve the single post like this.
const ViewPost = ({posts}) => {
  const params = useParams()
  console.log(params);

  const getPost = (id) => {
    return posts.find(p => p.id === (id));
  }

  const post = getPost(params.id)
  return (
    <>
      { post ?
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.user}</p>
        </>
        :
        <Navigate to="/BadLink" />
      }
    </>
  )
}

export default ViewPost; 