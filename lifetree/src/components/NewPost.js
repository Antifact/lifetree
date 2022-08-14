// imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Error from './ErrorMessage';

const NewPost = () => {

  // initialise useStates to receive the information from the form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
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

  // function to handle the submitting of the form.
  // stop the default behaviour of submitting
  const handleSubmit = async (e) => {
    e.preventDefault();

    // define the post as title and content
    const post = {title, content};

    // post the title and content to the posts in the database 
    // in json and then convert it to a string. then redirect the user to homepage
    const response = await fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json'
      }
    },
    
    redirect('/')
    );

    // if the response is not ok (not a 200 response)
    // then set the error to be the error in json
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    // reset the form if the response is good.
    if (response.ok) {
      setTitle('');
      setContent('');
      setError(null);
      // console.log('new post added', json);
    }
  };

  // bootstrap from for the new post submission
  return (
    <div className='form-container'>
      <legend>New Post</legend>
      <Form onSubmit={handleSubmit} className='form-wrapper'>
        {error && <Error />}
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Blog Post Title</Form.Label>
          <Form.Control type="text" placeholder="title goes here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder='enter content!' 
          onChange={(e) => setContent(e.target.value)}
          value={content}
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Submit Post
        </Button>

        {/* show the user what the date is that they're making the post. */}
        <p className='post-date'>Creating on: {new Date().toLocaleDateString()}</p>
      </Form>
    </div>
  )
};

export default NewPost;