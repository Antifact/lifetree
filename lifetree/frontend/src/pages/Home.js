import React, { useEffect, useState } from 'react';

// post component
import PostDetails from '../components/PostDetails';

const Home = () => {

  // UseState for retrieving and showing posts
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // Check to see if there are posts in the database. If the response is ok, then we invoke setPosts and serve it the response in JSON.
    const getPosts = async () => {
      const response = await fetch('/posts');
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    getPosts();
  }, []);

  return (
    <div className='Home'>
      <div className='posts'>
        {/* If there are posts, then use the map function to display them in the Home screen of the application.
        Give them a unique key of ID. */}
      {posts && posts.map((post) => (
        <PostDetails key={post._id} post={post} />
      ))}
      </div>
    </div>
  );
};

export default Home;