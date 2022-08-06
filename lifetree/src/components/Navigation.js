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
      { loggedInUser ?
        <>
          <Link to="/posts/new">New Post</Link>
          {loggedInUser}
          <Link to="/" onClick={logoutUser}>Logout</Link>
        </> 
      :
        <>
          <Link to="/login">Login</Link>
          <Link to="/">Register</Link>
          Hello, Guest
        </>

      }
    </nav>
  )
}

export default Navigation;