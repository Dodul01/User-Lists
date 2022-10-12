import React from "react";
import "./style.css";
import Nav from './Components/Nav'
import PostsContainer from './Components/PostsContainer';

export default function App() {
  return (
    <div>
      <Nav />
      <PostsContainer />
    </div>
  );
}
