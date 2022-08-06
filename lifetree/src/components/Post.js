const Post = ({post}) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>{post.user}</p>
      <p>{post.id}</p>
    </>
  )
}

export default Post;