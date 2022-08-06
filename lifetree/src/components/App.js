import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Login from './Login';
import Posts from './Posts';
import ViewPost from './ViewPost';
import BadLink from './BadLink';
import CreatePost from './CreatePost';
import posts from '../data/posts.json';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

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
      {/* { !loggedInUser ?
        <Login loginUser={loginUser} />
        :
        <CreatePost loggedInUser={loggedInUser} newPost={newPost} />
      }

      <Posts blogPosts={blogPosts} /> */}


      {/* Components for routing using React Router */}
      <Router>
      <Navigation loggedInUser={loggedInUser} loginUser={loginUser} />
        <Routes>
          <Route path="/" element={<Navigate to="posts" replace />} />

          <Route path="posts">
          <Route index element={<Posts blogPosts={blogPosts} />} />
            <Route path="new" element={
              loggedInUser?
                <CreatePost loggedInUser={loggedInUser} newPost={newPost} />
              :
                <Navigate to="/login" />
            } />
            <Route path=":id" element={<ViewPost blogPosts={blogPosts}/>} />
          </Route>

          <Route path="login" element={<Login loginUser={loginUser} />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<BadLink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
