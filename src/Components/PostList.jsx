import React from 'react';
import '../style.css';

const PostList = (props) =>{
  return(
    <div className='userCard' key={props.id}>
      <h3 className="profileName">
        Name: {props.name} 
        <span className="userName">
          ({props.username})
        </span>
      </h3>
      <h4 className="email">Email: {props.email}</h4>
      <div>
        <h4 className="address">
          Address: {props.address}
        </h4>
      </div>
    </div>
  )
}
export default PostList;