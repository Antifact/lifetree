import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const AdminDash = () => {

  const [admin, setAdmin] = useState([]);
  const [user, setUser] = useState([]);

  const redirect = useNavigate();

  useEffect(() => {

  const user = JSON.parse(localStorage.getItem('userInfo'));

  // this redirects the user if they are not logged in.
  // it checks to see if the user has their userInfo in the localstorage
  // and then checks to see if they are admin. if not, then  
  // it redirects the user.
  // this is not the best way to do it but it was an easy fix for the time being
  if (user) {
    const admin = JSON.parse(localStorage.getItem('userInfo'))['admin'];
    setUser(user);

    if (admin) {
      setAdmin(admin);
    } else {
      setAdmin(null);
      redirect('/');
    }
  } else {
    setUser(null);
    redirect('/');
  }
}, []);
  

  return (
    <>
      <div className='post-details'>
        <h3>Admin Panel</h3>
        <h4>What would you like to manage?</h4>

        <div className='buttons'>
          <Link to='/admin/posts/'><Button variant="outline-primary" size="lg" className='btn-left'>Posts</Button></Link>
          <Link to='/admin/users/'><Button variant="outline-primary" size="lg" className='btn-right'>Users</Button></Link>
        </div>
      </div>
    </>
  )
}


export default AdminDash;