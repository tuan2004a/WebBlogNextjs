# WebBlogNextjs

## Introduction
This is a web project that allows users to view, post blogs, and send feedback via email.

## Technologies Used
- **Next.js**: A modern React framework for web development.
- **MongoDB**: NoSQL database for storing blog posts and user information.
- **TailwindCSS**: Utility-first CSS framework for building modern, responsive interfaces.
- **Axios**: HTTP client for making API requests between frontend and backend.

## Main Features
- View a list of blog posts.
- Post new blogs (admin access required).
- Send feedback or contact via email.

## Getting Started
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the project in development mode:
   ```bash
   pnpm run dev
   ```
3. Access the website at: [http://localhost:3000](http://localhost:3000)

## Additional Notes
- Make sure MongoDB connection is configured in the config file.
- To enable feedback via email, set up SMTP information in the backend.