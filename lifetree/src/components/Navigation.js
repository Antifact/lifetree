const Navigation = ({loggedInUser, loginUser}) => {
  const logoutUser = (e) => {
    e.preventDefault()
    loginUser("")
  }

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      { loggedInUser ?
        <>
          {loggedInUser}
          <a href="/" onClick={logoutUser}>Logout</a>
        </> 
      :
        <>
          <a href="/">Login</a>
          <a href="/">Register</a>
          Guest
        </>

      }
    </nav>
  )
}

export default Navigation;