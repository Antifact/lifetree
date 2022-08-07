import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Error from './Error';
import axios from 'axios';

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage('Passwords do not match');
    } else {
      setMessage(null)
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post('/users',
        {username, email, password},
        config
        );

        localStorage.setItem('userInfo', JSON.stringify(data));
      } catch (error) {
        setError(error.repsonse.data.message);
      }
    };

    console.log(username);
  }

  return (
      <div className="loginContainer">
        {message && <Error varient="danger">{message}</Error>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" value={username} 
            placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} 
            placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} 
            placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" value={confirmpassword} 
            placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
          </Form.Group>

          <Button varient="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
  )
}

export default Register;