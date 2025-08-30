# SAPID Research Website

A modern, responsive website for SAPID Research built with React, TypeScript, and Material-UI Joy.

## Features

- 🎨 Modern green color scheme
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- ♿ Accessibility compliant
- 🔒 Security-focused with CSP headers
- 🛡️ **GDPR Compliant** - Full compliance with General Data Protection Regulation
- 🍪 **Cookie Consent Management** - Granular cookie preferences
- 📋 **Data Subject Rights** - Easy exercise of GDPR rights
- 🔐 **Privacy Policy** - Comprehensive data protection information

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
│   ├── Main.tsx
│   ├── CookieConsent.tsx      # GDPR cookie consent banner
│   ├── PrivacyPolicy.tsx      # Comprehensive privacy policy
│   ├── DataSubjectRights.tsx  # Data subject rights form
│   ├── GDPRForm.tsx          # GDPR-compliant form wrapper
│   └── Footer.tsx            # Footer with privacy links
├── constants/          # Theme and configuration constants
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── App.tsx           # Main application component
├── index.tsx         # Application entry point
└── theme.ts          # MUI Joy theme configuration
```

## GDPR Compliance

This website is fully compliant with the General Data Protection Regulation (GDPR). Key features include:

### Cookie Management

- Granular cookie consent with accept/reject/settings options
- Four cookie categories: Necessary, Analytics, Marketing, Preferences
- Easy consent withdrawal and preference changes
- Local storage of consent preferences

### Privacy Policy

- Comprehensive privacy policy covering all GDPR requirements
- Clear explanation of data processing legal basis
- Detailed information about data retention and sharing
- Contact information for privacy inquiries

### Data Subject Rights

- Dedicated form for exercising GDPR rights
- Support for all rights: Access, Rectification, Erasure, Portability, etc.
- 30-day response commitment
- Identity verification options

### Form Compliance

- All forms include explicit consent checkboxes
- Clear data processing notices
- Links to privacy policy and rights information
- Consent withdrawal instructions

### Additional Features

- Footer with privacy policy and data rights links
- GDPR compliance notice
- SEO-friendly privacy meta tags
- Multiple contact methods for privacy inquiries

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.
