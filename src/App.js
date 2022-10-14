import React from "react";
import "./style.css";
import Nav from './Components/Nav'
import PostsContainer from './Components/PostsContainer';
import Search from './Components/Search'

export default function App() {
  return (
    <div>
      <Nav />
      <Search />
      <PostsContainer />
    </div>
  );
}
