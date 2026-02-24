# Morland Investing LLC Website

A modern, responsive website for Morland Investing LLC - a land flipping business.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive (mobile-friendly)
- ⚡ Fast performance with React + Vite
- 🎯 SEO-friendly structure
- 📧 Contact form
- 🚀 Easy to deploy

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern CSS features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## Deployment

This website can be deployed to:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

### Deploying to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

## Customization

### Update Business Information

- Edit contact information in `src/components/Contact.jsx`
- Update company stats in `src/components/About.jsx`
- Modify services in `src/components/Services.jsx`

### Styling

- Main color scheme is defined in `src/index.css` as CSS variables
- Each component has its own CSS file for easy customization

## Next Steps

1. **Set up Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository**:
   - Go to GitHub and create a new repository
   - Push your code:
     ```bash
     git remote add origin <your-repo-url>
     git branch -M main
     git push -u origin main
     ```

3. **Add form submission**: Currently the contact form just logs to console. You'll want to:
   - Set up a backend service (e.g., Formspree, EmailJS, or your own API)
   - Update the form submission handler in `src/components/Contact.jsx`

4. **Add domain**: Configure your custom domain in your hosting provider

5. **SEO optimization**: 
   - Add meta tags
   - Set up Google Analytics
   - Submit sitemap to search engines

## License

© 2024 Morland Investing LLC. All rights reserved.
