# Blog-Generator

Web application that allows users to generate and manage blog posts using Gemini. The application focuses on content creation, display, and basic management functionalities.

## Usage

1. Clone the repository.
2. Run `npm install` to install all the dependencies.
3. Copy the `.env.example` file to `.env` and fill in the required details.
4. Run `npm start` to start the server.

## Assumptions

We are using LLMs, specifically Gemini-1.5-flash, hence there are bound to be some assumptions.

1. The user inputs only a single, concise, and sensible topic. The model is not designed to handle multiple topics, long sentences, or instructions that might result in prompt engineering.
2. The LLM generates a blog post starting with `"## "`.
3. The first line of the generated content is the title of the blog post and hence can be distinguished with the rest by `"\n\n"`.

## Product Video

