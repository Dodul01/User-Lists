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
      {users.map(user =>{
        return <PostList
                  key={user.id}
                  name={user.name}
                  username={user.username}
                  email={user.email}
                  address={user.address.city}
                />
      })}
    </div>
  )
}
export default PostsContainer;