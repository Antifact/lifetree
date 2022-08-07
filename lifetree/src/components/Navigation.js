import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = ({loggedInUser, loginUser}) => {

  const redirect = useNavigate();

  const logoutUser = (e) => {
    e.preventDefault();
    loginUser("");
    redirect("/");
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
          <Link to="/posts/new">New Post</Link>
          {loggedInUser}
          <Link to="/" onClick={() => {
            localStorage.removeItem('userInfo');
            redirect('/');

          }}>Logout</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
    </nav>
  )
}

export default Navigation;