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


/************************************
 *            Gemini API
 ************************************/

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const GeminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function generateBlog(prompt) {
    const result = await GeminiModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}


/************************************
 *               Routes
 ************************************/

// GET /api/posts
app.get('/api/posts', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while retrieving the blog posts');
    }
});

// POST /api/posts
app.post('/api/generate', async (req, res) => {
    const prompt = req.body.prompt;
    const content = await generateBlog(prompt);
    console.log(content);

    try {
        const blog = await Blog.create({ title: prompt, content: content });
        // const blog = await Blog.create({ title: prompt, content: "content" });
        res.json(blog);
    } catch {
        res.status(500).send('An error occurred while generating the blog post');
    }
});

// DELETE /api/posts/:id
app.delete('/api/posts/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await Blog.findByIdAndDelete(id);
        res.send('Blog post deleted');
    } catch {
        res.status(404).send('Blog post not found');
    }
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});