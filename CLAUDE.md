# Project Context

## Overview
Personal portfolio website for Saurav Solanki, Senior ML Engineer. Built with Next.js and the Tailwind Nextjs Starter Blog template.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX with Contentlayer
- **Deployment**: GitHub Pages

## Key Directories
- `app/` - Next.js app router pages
- `components/` - React components
- `data/blog/` - Blog posts in MDX format
- `data/authors/` - Author information (default.mdx is the main author)
- `data/projectsData.ts` - Portfolio projects configuration
- `data/siteMetadata.js` - Site configuration and metadata
- `public/static/images/` - Static images and assets

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally

## Notes
- The site uses `avatar.jpg` (not `avatar.png`) for the author avatar
- Blog posts should be placed in `data/blog/` directory
- Projects are configured in `data/projectsData.ts`

## Cleanup History
- 2026-01-18: Removed template/example content (blog-template/, sparrowhawk.mdx, faq/, unused images)
