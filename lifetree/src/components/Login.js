import { useState } from "react";

const Login = ({loginUser}) => {

  const initialFormData = {
    username: "",
    password: ""
  }
  
  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("submitted")
    // console.log(formData)
    loginUser(formData.username)
    setFormData(initialFormData)
  }

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
        </div>

          <input type="submit" value="Login"/>
      </form>
    </>
  )
}

export default Login;