import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  });

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/api/posts')
    setPosts(res.data);
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
};

export default App;
