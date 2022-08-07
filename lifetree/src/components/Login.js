import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post('/users/login',
      {
        username,
        password
      },
      config
      );

      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
      <div className="loginContainer">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" value={username} 
            placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} 
            placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <Button varient="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
  )
}

export default Login;