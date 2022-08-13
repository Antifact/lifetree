// imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import ErrorMessage from '../components/ErrorMessage';
import axios from 'axios';

const Login = () => {

  // create new states in order to receive and set username, password and errors
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const redirect = useNavigate();

  // const initialFormData = {
  //   username: "",
  //   password: ""
  // }
  // const [formData, setFormData] = useState(initialFormData);

  // create a new function to handle the submitting of the login form
  const handleSubmit = async (e) => {

    // stop the form from doing default behaviour
    e.preventDefault();
    // console.log("submitted")
    // console.log(formData)
    
    // try to send the data using axios and json headers. 
    // this will try to send the information from the 
    // form to the database to login the user
    // otherwise, it will catch errors
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      };

      const { data } = await axios.post(
        '/users/login',
        {
          username,
          password
        },
        config
      );
      
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      // setFormData(initialFormData);
      redirect("/");

    } catch (error) {
      setError(error.response.data);
    }
  }


  // return a bootstrap from that takes the input of the fields and then uses the useState to then store 
  // the inputs. then send them with the handle submit function.
  return (
    <div className='form-container'>
      <legend>Login</legend>

      {/* couldn't get this to work properly, but this is meant to display the errors from the try catch  */}
      { error && <ErrorMessage variant='danger'>{error}</ErrorMessage> }
      <Form onSubmit={handleSubmit} className='form-wrapper'>
        <Form.Group className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        </Form.Group>

        <Button variant="light" type="Login">
          Submit Post
        </Button>
      </Form>
    </div>
  )
}

export default Login;