import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BlogPost from './components/BlogPost';
import Header from './components/Header';
import Prompt from './components/Prompt';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/api/posts')
    setPosts(res.data);
  }

  return (
    <div style={{backgroundColor: 'antiquewhite'}}>
      <Header />
      <Prompt />
      <BlogPost posts={posts} />
    </div>
  );
};

export default App;
