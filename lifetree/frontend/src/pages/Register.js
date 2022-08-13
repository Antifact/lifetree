// imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import ErrorMessage from '../components/ErrorMessage';
import axios from 'axios';

const Register = () => {

  // useStates to send and receive information from the form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const redirect = useNavigate();

  // function to handle the logic for the submit button on the form.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email)
    
    // check to ensure that the password and the confirm password fields are both the same
    // if not, display an error message.
    // if they do, no need to display message
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      setMessage(null);
      

      // try catch to post the data taken from the form and send to the database using axios post.
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        };

        // send the username, email and password using axios to the database
        const { data } = await axios.post(
          '/users',
          { username, email, password },
          config
        );

        // store the data taken from when the client registers and store it in localstorage.
        // redirects to home page after successful registration
        localStorage.setItem('userInfo', JSON.stringify(data));
        redirect('/');
        
        // any errors are meant to be displayed here but error.response.data.message did not work for me.
      } catch (error) {
        setMessage(error.response.data.message);
      }

    }
  }

  // return a basic registration form from bootstrap
  // takes the input from the fields and stores them in the useStates
  // that were defined earlier.
  return (
    <div className='form-container'>
      <legend>Register</legend>

      {/* errors were meant to be displayed here. */}
      { message && <ErrorMessage variant='danger'>{message}</ErrorMessage> }
      <Form onSubmit={handleSubmit} className='form-wrapper'>
        <Form.Group className="mb-3" controlId='formUsername'>
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId='formEmail'>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" placeholder="john@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password" placeholder="Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          />
        </Form.Group>

        <Button variant="light" type="Register">
          Submit Post
        </Button>
      </Form>
    </div>
  )
}

export default Register;