import React from 'react';
import { useState } from 'react'

import Post from './Post';
import Header from './Header';

import { ThemeProvider } from './ThemeContext'


export default function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'title#1', subtitle: 'sub#1', likes: 20, read:false },
    { id: Math.random(), title: 'title#2', subtitle: 'sub#2', likes: 10, read:true },
    { id: Math.random(), title: 'title#3', subtitle: 'sub#3', likes: 50, read:false },
  ]);

  function handleRefresh() {
    
    setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `title#${prevState.length + 1}`,
          subtitle: `sub#${prevState.length + 1}`,
          likes: 50,
        }
    ]);
  }

  function handleRemove(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
      ));
  }



  return (
    <ThemeProvider>

      <Header 
        title="Blog do JStack"
      >
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
        key={post.id}
        onRemove={handleRemove}
        post={post}
        />
      ))}
    </ThemeProvider>
  );
}
