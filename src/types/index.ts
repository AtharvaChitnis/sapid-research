export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface TestimonialProps {
  author: string;
  quote: string;
  role?: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  ariaLabel: string;
}
