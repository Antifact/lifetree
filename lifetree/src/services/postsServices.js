import lifetreeAPI from '../config/api';

const getPosts = async () => {
  const res = lifetreeAPI.get('/posts');
  console.log(res);
}

export default getPosts;