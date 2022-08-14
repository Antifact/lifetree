import React, { useEffect, useState } from 'react';

import UserDetails from '../components/UserDetails';


const AdminPosts = () => {


    // UseState for retrieving and showing posts
    const [users, setUsers] = useState(null);

    useEffect(() => {
      // Check to see if there are posts in the database. If the response is ok, then we invoke setPosts and serve it the response in JSON.
      const getUsers = async () => {
        const response = await fetch('/users');
        const json = await response.json();
  
        if (response.ok) {
          setUsers(json);
        }
      };
  
      getUsers();
    }, []);

  return (
    <>
      <div className='post-details'>
        <h3>User Administration</h3>
          {users && users.map((user) => (
            <UserDetails key={user._id} user={user} />
          ))}
      </div>
    </>
  )
};

export default AdminPosts;