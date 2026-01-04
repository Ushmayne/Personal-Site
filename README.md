# Personal Site V2

A modern, responsive personal portfolio website built with Next.js 16, React 19, and Tailwind CSS. Showcasing projects, hobbies, resume, and interactive features.

## Overview

This is the second version of a personal portfolio site designed to showcase projects, hobbies, and professional experience. The site features a clean, modern design with multiple sections and interactive content.

## Features

- **Hobbies Section**: Explore various interests including:
  - 🎮 Gaming
  - 🏋️ Gym & Fitness
  - 🎵 Music
  - 🧱 LEGO
  - 🦁 Animal Fun Facts (with API integration)
  
- **Projects Page**: Portfolio of personal and professional projects
- **Resume Page**: Professional background and experience
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop optimization
- **Modern Stack**: Next.js 16 with TypeScript support
- **API Routes**: Custom backend endpoints for dynamic content

## Tech Stack

- **Framework**: Next.js 16.0.8
- **React**: 19.2.1
- **Styling**: Tailwind CSS 4.1.17
- **Language**: TypeScript
- **Linting**: ESLint

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser. The page will auto-refresh as you make changes.

### Building

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
my-app/
├── app/
│   ├── components/        # Reusable React components
│   ├── hobbies/          # Hobbies section with subcategories
│   ├── projects/         # Projects page
│   ├── resume/           # Resume page
│   ├── api/              # API routes
│   └── page.tsx          # Home page
├── public/               # Static assets
└── package.json
```

## Key Sections

- **Home**: Landing page with navigation
- **Hobbies**: 
  - Animals: Fun facts fetched from animal API
  - Gaming: Gaming interests and experience
  - Gym: Fitness routines and goals
  - LEGO: LEGO collections and builds
  - Music: Music preferences and interests
- **Projects**: Portfolio of completed projects
- **Resume**: Professional summary and experience

## API Endpoints

- `GET /api/animal-fun-fact` - Retrieves a random fun fact about animals

## Deployment

This project is ready to be deployed on Vercel or any Node.js hosting platform. For Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

See [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

This project is private and created for personal use. 
