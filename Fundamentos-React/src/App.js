import React, {useState} from 'react';

import Post from './Post';
import Header from './Header';



export default function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'title#1', subtitle: 'sub#1', likes: 20 },
    { id: Math.random(), title: 'title#2', subtitle: 'sub#2', likes: 10 },
    { id: Math.random(), title: 'title#3', subtitle: 'sub#3', likes: 50 },
  ]);

  console.log(posts)

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
    <>
      <Header title="Blog do JStack">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          onRemove={handleRemove}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
          likes={post.likes}
        />
      ))}
    </>
  );
}
