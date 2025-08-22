<div align="center">
   <h1>Minimalistic 11ty Portfolio</h1>
   <p>This is a minimalistic, personal portfolio website built using the 11ty (Eleventy) static site generator. The website features a projects page and a blog page, both of which are populated with content from markdown files.</p>
</div>

<div align="center">
   <a href="https://11ty.sites.angellabs.xyz/" target="_blank" rel="noopener noreferrer"
       style="display:inline-flex;align-items:center;gap:0.6rem;padding:0.5rem 0.75rem;border-radius:10px;border:1px solid rgba(0,0,0,0.06);text-decoration:none;color:inherit;background:rgba(0,0,0,0.02)">
      <img src="https://skillicons.dev/icons?i=appwrite" alt="Live Demo" style="width:36px;height:36px;display:block;border-radius:6px" />
      <div style="line-height:1">
         <div style="font-size:1rem;font-weight:700">Live Demo</div>
         <div style="font-size:0.85rem;">Powered by AppWrite</div>
      </div>
   </a>
</div>

## Features

- **Projects Page**: Accessible at `/projects`, this page lists all projects. Each project links to its own page at `/projects/<slug>`, where visitors can read more about the project.
- **Blog Page**: Accessible at `/blog`, this page lists all blog posts. Each blog post links to its own page at `/blog/<slug>`, where visitors can read the full post.

## Design

The website is designed to be minimalistic, with a focus on loading speed. The CSS and JavaScript are kept to a minimum to ensure fast loading times and a clean user experience.

## Setup Instructions

1. **Clone the Repository**:

   ```
   git clone https://github.com/4ngel2769/11ty-minimal.git
   cd 11ty-minimal
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Run the Development Server**:

   ```
   npm run serve
   ```

4. **Build the Project**:
   ```
   npm run build
   ```

## Directory Structure

- `src/`: Contains all source files including markdown content, layouts, and assets.
- `src/_data/`: Contains site-wide data and configuration.
- `src/_includes/`: Contains reusables.
- `src/layouts/`: Contains layout templates for the website.
- `src/components/`: Contains reusable components for the website.
- `src/assets/`: Contains styles and scripts for the website. (All CSS and JS are inlined for minimalism.)
- `src/content/blog/`: Contains markdown files for each blog post.
- `src/content/projects/`: Contains markdown files for each project.

## Important Files

- `src/_data/site.js`: Contains site-wide data and configuration.
- `src/_includes/layouts/base.njk`: The base layout for the website. This contains all styling and scripts.
- `src/index.md`: The main entry point for the website.
- `src/blog.md`: The blog page. All blog posts are listed here.
- `src/projects.md`: The projects page. All projects are listed here.

## License

This project is licensed under the MIT License.
