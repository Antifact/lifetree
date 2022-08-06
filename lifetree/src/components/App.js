import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Login from './Login';
import Posts from './Posts';
import CreatePost from './CreatePost';
import posts from '../data/posts.json';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);

  const loginUser = (username) => {
    setLoggedInUser(username);
  }

  const newPost = (title, content) => {
    const post = {
      title: title,
      content: content,
      user: loggedInUser,
      id: blogPosts[blogPosts.length - 1].id + 1
    }
    setBlogPosts(
      (blogPosts) => [...blogPosts, post]
    )
  }

  useEffect(
    () => {
      setBlogPosts(posts)
    }
    ,
    []
  )

  return (
    <div>
      <h1>Lifetree</h1>
      <Navigation loggedInUser={loggedInUser} loginUser={loginUser} />
      { !loggedInUser ?
        <Login loginUser={loginUser} />
        :
        <CreatePost loggedInUser={loggedInUser} newPost={newPost} />
      }

      <Posts blogPosts={blogPosts} />


      {/* Components for routing using React Router */}
      <Router>
        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
