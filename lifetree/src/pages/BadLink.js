import React from 'react';
import { Link } from 'react-router-dom';

const BadLink = () => {
  return (
    <>
    <div className='post-details'>
      <h1>No such page found!</h1>
      <p>Please click <Link to='/'>here</Link> to go home!</p>
    </div>
    </>
  )
};

export default BadLink;