export const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/', ariaLabel: 'Navigate to home page' },
  { label: 'About', path: '#about', ariaLabel: 'Learn about us' },
  { label: 'Services', path: '#services', ariaLabel: 'View our services' },
  { label: 'Contact', path: '#contact', ariaLabel: 'Contact us' },
];

export const TESTIMONIALS = [
  {
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    quote:
      'SAPID Research provided invaluable insights that transformed our market strategy.',
  },
  {
    author: 'Michael Chen',
    role: 'CEO',
    quote:
      'Their data-driven approach helped us identify key growth opportunities.',
  },
  {
    author: 'Emily Rodriguez',
    role: 'Product Manager',
    quote:
      'The depth of their research and analysis exceeded our expectations.',
  },
];

export const THEME = {
  colors: {
    accent: {
      light: '#C8E6C9', // Lighter dark green
      main: '#2E7D32', // Darker Material Green
      dark: '#1B5E20', // Even darker green
      gradient: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
    },
    primary: {
      light: '#C8E6C9', // Lighter dark green
      main: '#2E7D32', // Darker Material Green
      dark: '#1B5E20', // Even darker green
      gradient: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
    },
    secondary: {
      light: '#F3E5F5', // Light purple
      main: '#9C27B0', // Material Purple
      dark: '#6A1B9A', // Dark purple
    },
    background: {
      default: '#FFFFFF',
      paper: '#F1F8F1', // Slightly darker green tinted background
      gradient: 'linear-gradient(135deg, #F1F8F1 0%, #FFFFFF 100%)',
    },
    text: {
      primary: '#1B5E20', // Darkest green for primary text
      secondary: '#2E7D32', // Dark green for secondary text
      hint: '#558B2F', // Medium dark green for hints
    },
  },
  spacing: {
    section: {
      vertical: {
        xs: '2rem', // 32px
        sm: '3rem', // 48px
        md: '4rem', // 64px
        lg: '6rem', // 96px
      },
      horizontal: {
        xs: '1rem', // 16px
        sm: '2rem', // 32px
        md: '3rem', // 48px
        lg: '4rem', // 64px
      },
    },
    grid: {
      xs: '1rem', // 16px
      sm: '1.5rem', // 24px
      md: '2rem', // 32px
      lg: '3rem', // 48px
    },
  },
  transitions: {
    duration: {
      short: 200,
      medium: 300,
      long: 500,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.1)',
    lg: '0 8px 16px rgba(0,0,0,0.1)',
    xl: '0 12px 24px rgba(0,0,0,0.1)',
  },
};
