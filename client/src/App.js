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
    try {
      const res = await axios.get('http://localhost:4000/api/posts');
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  const handlePrompt = (prompt) => {
    console.log('Generate blog post with topic:', prompt);
    axios.post('http://localhost:4000/api/generate', { prompt: prompt })
      .then(() => fetchPosts())
      .catch(error => {
      console.error('Error generating blog post:', error);
      });
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    console.log('Delete post with id:', id);
    axios.delete(`http://localhost:4000/api/posts/${id}`)
      .then(() => fetchPosts())
      .catch(error => {
      console.error('Error deleting post:', error);
      });
  }

  return (
    <div style={{backgroundColor: 'antiquewhite'}}>
      <Header />
      <Prompt onSubmit={handlePrompt}/>
      <BlogPost posts={posts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
