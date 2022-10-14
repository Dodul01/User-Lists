import React, {useState, useEffect} from 'react';
import '../style.css';
import PostList from './PostList';

//API = 'https://jsonplaceholder.typicode.com/users';

const PostsContainer = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    setUsers(await response.json());
  }

  useEffect(()=>{
    getUsersData();
  }, [])

  return(
    <div className="container">
      {users.map(()=>{
        return <PostList />
      })}
    </div>
  )
}
export default PostsContainer;