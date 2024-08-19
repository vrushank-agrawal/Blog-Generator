const express = require('express');
const app = express();
app.use(express.json());

// Load environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Connect to database
const connectToDB = require('./config/connectToDB');
connectToDB()

// Load models
const Blog = require('./models/blogs');

app.get('/api/posts', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while retrieving the blog posts');
    }
});

app.post('/api/generate', async (req, res) => {
    const prompt = req.body.prompt;

    // #TODO Call LLM API here

    try {
        const blog = await Blog.create({ title: prompt, content: 'This is a test blog' });
        res.json(blog);
    } catch {
        res.status(500).send('An error occurred while generating the blog post');
    }
});

app.delete('/api/posts/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await Blog.findByIdAndDelete(id);
        res.send('Blog post deleted');
    } catch {
        res.status(404).send('Blog post not found');
    }
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
