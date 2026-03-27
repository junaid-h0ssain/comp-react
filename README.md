# React Component Library

A modern React component library built with TypeScript and Vite. Features a collection of reusable UI components with Tailwind CSS styling for a clean, professional look.

## Features

- React 19 with TypeScript support
- Vite for fast development and optimized builds
- Tailwind CSS for responsive styling
- Type-safe components
- React Icons integration for scalable icons
- ES Lint and Prettier for code quality

## Components

The project includes the following reusable components:

- **Accordion**: Expandable FAQ or content sections with toggle functionality
- **ImageSlider**: Image carousel component that fetches and displays images from an API
- **LoadMore**: Infinite scroll/load more component for displaying paginated content
- **RandomColorGenerator**: Generates and displays random colors
- **StarSelector**: Interactive star rating component

## Quick Start

### Installation

```bash
npm install
# or
bun install
```

### Development

```bash
npm run dev
```

This will start the Vite development server with Hot Module Replacement (HMR).

### Build

```bash
npm run build
```

Compiles TypeScript and builds the project for production.

### Linting and Formatting

```bash
npm run lint        # Check for linting errors
npm run format      # Format code with Prettier
npm run format:check # Check formatting without modifying
```

## Deployment

The project is configured for deployment to Cloudflare using Wrangler.

```bash
npm run preview    # Build and preview locally
npm run deploy     # Deploy to Cloudflare
```

## Technologies

- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **Wrangler**: Cloudflare CLI
- **ESLint & Prettier**: Code quality and formatting
