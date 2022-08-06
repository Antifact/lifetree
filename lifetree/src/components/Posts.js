import Post from './Post';

const Posts = ({blogPosts}) => {
  return (
    <>
      {blogPosts.map(post => 
          <Post key={post.id} post={post} />
      )}
    </>
  )
}

export default Posts;