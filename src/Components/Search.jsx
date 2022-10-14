import React from 'react';
import '../style.css';

const Search = () =>{
  return(
    <div className="searchBox">
      <input 
        type="text"
        placeholder="Search..."
      />
      <button>Search</button>
    </div>
  )
}
export default Search;