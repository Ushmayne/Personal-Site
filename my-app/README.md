# Personal Site V2 - App

A modern personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

- **Multi-page Portfolio**: Home, Projects, Resume, and Hobbies sections
- **Dynamic Hobbies**: Organized hobby categories with Animal Fun Facts API integration
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type-Safe**: Full TypeScript support
- **Modern Tech Stack**: Latest versions of Next.js and React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The site will auto-refresh when you make changes to files in the `app` directory.

### Building & Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
app/
├── api/                      # API routes
│   └── animal-fun-fact/      # Animal facts endpoint
├── components/               # Reusable components
│   └── sidebar.tsx          # Navigation sidebar
├── hobbies/                  # Hobbies section
│   ├── animals/             # Animal fun facts
│   ├── gaming/              # Gaming interests
│   ├── gym/                 # Fitness
│   ├── lego/                # LEGO collections
│   ├── music/               # Music interests
│   └── [id]/                # Dynamic hobby details
├── projects/                # Portfolio projects
├── resume/                  # Professional resume
├── layout.tsx               # Root layout
├── page.tsx                 # Home page
├── globals.css              # Global styles
└── global.d.ts              # Global type definitions
```

## Technologies Used

- **Next.js 16.0.8** - React framework
- **React 19.2.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **ESLint** - Code quality
- **PostCSS** - CSS processing

## Key Pages

- `/` - Home/landing page
- `/hobbies` - Browse hobby categories
- `/hobbies/animals` - Animal fun facts with API integration
- `/hobbies/gaming` - Gaming interests
- `/hobbies/gym` - Fitness routines
- `/hobbies/lego` - LEGO builds and collections
- `/hobbies/music` - Music preferences
- `/projects` - Portfolio of projects
- `/resume` - Professional resume

## API Routes

- `GET /api/animal-fun-fact` - Get a random animal fun fact

## Customization

- **Styling**: Modify `globals.css` or update Tailwind config in `tailwind.config.js`
- **Content**: Edit page files in `app/hobbies/`, `app/projects/`, etc.
- **Components**: Add reusable components to `app/components/`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - CSS framework documentation
- [React](https://react.dev) - React documentation and guides

## Deployment

This project is ready for deployment on Vercel, Netlify, or any Node.js hosting:

- **Vercel** (recommended): [Next.js on Vercel](https://vercel.com/new?utm_source=create-next-app)
- **Other platforms**: See [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
