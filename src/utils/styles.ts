import { THEME } from '../constants';

// Common gradient text styles
export const gradientTextStyles = {
  background: THEME.colors.primary.gradient,
  backgroundClip: 'text' as const,
  WebkitBackgroundClip: 'text' as const,
  color: 'transparent',
};

// Common centered text styles
export const centeredTextStyles = {
  textAlign: 'center' as const,
};

// Common flex center styles
export const flexCenterStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Common flex between styles
export const flexBetweenStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

// Common card hover styles
export const cardHoverStyles = {
  borderRadius: THEME.borderRadius.lg,
  boxShadow: THEME.shadows.sm,
  transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
  '&:hover': {
    boxShadow: THEME.shadows.lg,
    transform: 'translateY(-8px)',
  },
};

// Common button styles
export const primaryButtonStyles = {
  borderColor: THEME.colors.primary.main,
  color: THEME.colors.primary.main,
  '&:hover': {
    borderColor: THEME.colors.primary.dark,
    backgroundColor: 'rgba(46, 125, 50, 0.1)',
  },
};

// Common section header styles
export const sectionHeaderStyles = {
  textAlign: 'center' as const,
  mb: 6,
};

// Common section footer styles
export const sectionFooterStyles = {
  textAlign: 'center' as const,
  mt: 8,
};

// Common icon container styles
export const iconContainerStyles = {
  textAlign: 'center' as const,
};

// Common tag styles
export const tagStyles = {
  bgcolor: 'rgba(46, 125, 50, 0.1)',
  color: THEME.colors.primary.main,
  mb: 2,
};
