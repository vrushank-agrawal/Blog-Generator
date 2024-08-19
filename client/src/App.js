import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BlogPost from './components/BlogPost';
import Header from './components/Header';
import Prompt from './components/Prompt';
import styles from './styles/loading';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const port = process.env.PORT || 4000;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`http://localhost:${port}/api/posts`);
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  const handlePrompt = async (prompt) => {
    try {
      setLoading(true);
      const res = await axios.post(`http://localhost:${port}/api/generate`, { prompt: prompt });
      setPosts(posts => [res.data, ...posts]);
      setLoading(false);
    } catch (error) {
      console.error('Error generating blog post:', error);
    }
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:${port}/api/posts/${id}`)
      .then(() => fetchPosts())
      .catch(error => {
      console.error('Error deleting post:', error);
      });
  }

  return (
    <div style={{backgroundColor: 'antiquewhite'}}>
      {loading &&
        <div style={styles.loadingScreen}>
          <span style={styles.text}>
            Generating post...
          </span>
        </div>
      }
        <Header />
        <Prompt onSubmit={handlePrompt}/>
        <BlogPost posts={posts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
