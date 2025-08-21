# Personal Portfolio Website

This is a personal portfolio website built using the 11ty (Eleventy) static site generator. The website features a projects page and a blog page, both of which are populated with content from markdown files.

## Features

- **Projects Page**: Accessible at `/projects`, this page lists all projects. Each project links to its own page at `/projects/<slug-of-project>`, where visitors can read more about the project.
- **Blog Page**: Accessible at `/blog`, this page lists all blog posts. Each blog post links to its own page at `/blog/<blog-slug>`, where visitors can read the full post.

## Setup Instructions

1. **Clone the Repository**:

   ```
   git clone <repository-url>
   cd ac.tech.11ty-minimal
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Run the Development Server**:

   ```
   npm run start
   ```

4. **Build the Project**:
   ```
   npm run build
   ```

## Directory Structure

- `src/`: Contains all source files including markdown content, layouts, and assets.
- `src/content/projects/`: Contains markdown files for each project.
- `src/content/blog/`: Contains markdown files for each blog post.
- `src/_includes/`: Contains reusable components and layouts.
- `src/assets/`: Contains styles and scripts for the website.

## Design

The website is designed to be minimalistic, with a focus on content. The CSS and JavaScript are kept to a minimum to ensure fast loading times and a clean user experience.

## License

This project is licensed under the MIT License.
