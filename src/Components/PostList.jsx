import React from 'react';
import '../style.css';

//API = 'https://jsonplaceholder.typicode.com/users';

const PostList = () =>{
  return(
    <div className='userCard'>
      <h3>
        Name 
        <span>
          (Username)
        </span>
      </h3>
      <h4>Email</h4>
      <div>
        <h3>Address</h3>

      </div>
    </div>
  )
}
export default PostList;