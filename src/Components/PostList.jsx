import React from 'react';
import '../style.css';

const PostList = () =>{
  return(
    <div className='userCard'>
      <h3 className="profileName">
        Name 
        <span className="userName">
          (Username)
        </span>
      </h3>
      <h4 className="email">Email</h4>
      <div>
        <h4 className="address">
          Address
        </h4>
      </div>
    </div>
  )
}
export default PostList;