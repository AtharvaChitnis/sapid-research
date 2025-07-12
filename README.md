# SAPID Research Website

A modern, responsive website for SAPID Research built with React, TypeScript, and Material-UI Joy.

## Features

- 🎨 Modern green color scheme
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- ♿ Accessibility compliant
- 🔒 Security-focused with CSP headers

## Tech Stack

- **React 18** with TypeScript
- **Material-UI Joy** for components
- **React Router** for navigation
- **Emotion** for styling

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sapid-research-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Deployment

This project is configured for deployment on Netlify. Simply connect your repository to Netlify and it will automatically build and deploy your site.

### Netlify Configuration

- Build command: `npm run build`
- Publish directory: `build`
- Node version: 18

## Project Structure

```
src/
├── components/          # React components
│   ├── ErrorBoundary.tsx
│   ├── LandingPage.tsx
│   └── Main.tsx
├── constants/          # Theme and configuration constants
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── App.tsx           # Main application component
├── index.tsx         # Application entry point
└── theme.ts          # MUI Joy theme configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.
