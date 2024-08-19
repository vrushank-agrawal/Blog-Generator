# Blog-Generator

Web application that allows users to generate and manage blog posts using Gemini. The application focuses on content creation, display, and basic management functionalities.

## Usage

1. Clone the repository.
2. Copy the `.env.example` file to `.env` and fill in the required details.
3. Run `npm install` in the root folder to install all the dependencies.
4. Run `npm start` in the root directory to run the app.

## Assumptions

We are using LLMs, specifically Gemini-1.5-flash, hence there are bound to be some assumptions.

1. The user inputs only a single, concise, and sensible topic. The model is not designed to handle multiple topics, long sentences, or instructions that might result in prompt engineering.
2. The LLM generates a blog post starting with `"## "`.
3. The first line of the generated content is the title of the blog post and hence can be distinguished with the rest by `"\n\n"`.
4. A decent blog post is 400 words long.

## Product Video

[Click here](https://www.loom.com/share/128f35d23ea34fe6ad6a8f9a4ccaa4ad?sid=acb3e5a2-f662-4a0a-a956-21c76f6af5e2)