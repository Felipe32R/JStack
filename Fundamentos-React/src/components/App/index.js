import React from 'react';
import { useState } from 'react'

import Post from '../Post/index';
import Header from '../Header';

import { ThemeProvider } from '../../contexts/ThemeContext'


export default function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'title#1', subtitle: 'sub#1', likes: 20, read:false, removed: true},
    { id: Math.random(), title: 'title#2', subtitle: 'sub#2', likes: 10, read:true , removed: false},
    { id: Math.random(), title: 'title#3', subtitle: 'sub#3', likes: 50, read:false, removed: false},
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
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId 
        ? {...post, removed: true}
        : post
        )
    )
    
    
    );
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
