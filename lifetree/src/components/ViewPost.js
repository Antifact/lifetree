import { useParams, Navigate } from 'react-router-dom';

const ViewPost = ({blogPosts}) => {
  const params = useParams()
  console.log(params);

  const getPost = (id) => {
    return blogPosts.find(p => p.id === parseInt(id));
  }

  const post = getPost(params.id)
  return (
    <>
      { post ?
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.user}</p>
        </>
        :
        <Navigate to="/BadLink" />
      }
    </>
  )
}

export default ViewPost;