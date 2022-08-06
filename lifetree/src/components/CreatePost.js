import { useState } from 'react';

const CreatePost = ({loggedInUser, newPost}) => {

  const initialFormData = {
    title: "",
    content: ""
  }

  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const clearForm = () => {
    setFormData(initialFormData);
  }

  const submitPost = (e) => {
    e.preventDefault();
    console.log(formData);
    newPost(formData.title, formData.content);
    clearForm();
  }


  return (
    <>
      <form onSubmit={submitPost}>
        <div>
          <input type="text" name="title" id="title" placeholder="Title" value={formData.title} onChange={handleFormData}/>
          <br />
          <textarea type="text" name="content" id="content" placeholder="Content" value={formData.content} onChange={handleFormData}/>
        </div>
        <input type="submit" value="post" />
      </form>
    </>
  )
}

export default CreatePost;