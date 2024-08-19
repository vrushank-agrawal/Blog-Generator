const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

// Load environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const corsOptions = {
    origin: '*',
    methods: 'GET,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    exposeHeaders: 'Content-Length,X-Kuma-Revision',
    maxAge: 86400
};

app.use(cors(corsOptions));

// Connect to database
const connectToDB = require('./config/connectToDB');
connectToDB()

// Load models
const Blog = require('./models/blog');


/************************************
 *            Gemini API
 ************************************/

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const GeminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function generateBlog(prompt) {
    prompt = "Generate a blog post of 400 words about the following topic: \n" + prompt;
    const result = await GeminiModel.generateContent(prompt);
    const response = result.response;
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

    try {
        const answer = await generateBlog(prompt);

        // First 2 letters are '## ' for titles, so we remove them
        answer = answer.slice(4);
        // We split the answer into title and content based on the first double newline
        const title = answer.split('\n\n')[0];
        const content = answer.split('\n\n').slice(1).join('\n\n');

        // Create a new blog post
        const blog = await Blog.create({ title: title, content: content });
        res.json(blog);

    } catch (err) {
        console.error(err);
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