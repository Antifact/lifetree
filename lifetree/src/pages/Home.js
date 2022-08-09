import React, { useEffect, useState } from 'react';

// post component
import PostDetails from '../components/PostDetails';

const Home = () => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
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
      {posts && posts.map((post) => (
        <PostDetails key={post._id} post={post} />
      ))}
      </div>
    </div>
  );
};

export default Home;