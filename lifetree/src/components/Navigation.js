// imports
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  // use state to ensure that the user is logged in
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    // check to see if the user has logged in by checking their localstorage
    const user = JSON.parse(localStorage.getItem('userInfo'));

    // if (admin) {
    //   setAdmin(admin);
    //   console.log(admin);
    // } else {
    //   setAdmin(null);
    // }

    // if the user does have localstorage item, set them to 'user', otherwise nothing
    if (user) {
      const admin = JSON.parse(localStorage.getItem('userInfo'))['admin'];
      setUser(user);

      if (admin) {
        setAdmin(admin);
        // console.log(admin);
      } else {
        setAdmin(null);
      }
      // console.log(user)
    } else {
      setUser(null);
    }

  }, []);


  return (
    // Bootstrap navigation for responsiveness 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Nav.Link as={Link} to="/" >Lifetree</Nav.Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/about" >About</Nav.Link>
              </Nav>

            {/* If the user is logged in, change what they can see on the navbar instead of seeing the same one */}
              <Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to="/login">Hello, {user.username}!</Nav.Link>
                <Nav.Link as={Link} to="/new" >New Post</Nav.Link>
                {admin && <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>}
              
                  <Nav.Link as={Link} to="/" onClick={() => {localStorage.removeItem('userInfo')}}>
                    Logout
                  </Nav.Link>
              </>
            ) : (
              // Otherwise, show them prompts to login or register
              <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;