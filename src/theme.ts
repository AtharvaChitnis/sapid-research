import { extendTheme } from '@mui/joy/styles';
import { THEME } from './constants';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          plainColor: THEME.colors.primary.main,
          plainHoverBg: `rgba(46, 125, 50, 0.1)`,
          plainActiveBg: `rgba(46, 125, 50, 0.2)`,
          plainDisabledColor: `rgba(46, 125, 50, 0.5)`,
          outlinedColor: THEME.colors.primary.main,
          outlinedBorder: THEME.colors.primary.main,
          outlinedHoverBg: `rgba(46, 125, 50, 0.1)`,
          outlinedHoverBorder: THEME.colors.primary.dark,
          outlinedActiveBg: `rgba(46, 125, 50, 0.2)`,
          solidBg: THEME.colors.primary.main,
          solidHoverBg: THEME.colors.primary.dark,
          solidActiveBg: THEME.colors.primary.dark,
          solidDisabledBg: `rgba(46, 125, 50, 0.5)`,
        },
        background: {
          body: THEME.colors.background.default,
          surface: THEME.colors.background.paper,
        },
        text: {
          primary: THEME.colors.text.primary,
          secondary: THEME.colors.text.secondary,
        },
      },
    },
  },
  fontFamily: {
    body: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    display:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: THEME.borderRadius.md,
          transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: THEME.borderRadius.lg,
          transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
          boxShadow: THEME.shadows.sm,
          '&:hover': {
            boxShadow: THEME.shadows.lg,
            transform: 'translateY(-8px)',
          },
        },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: THEME.borderRadius.md,
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          '&.gradient-text': {
            background: THEME.colors.primary.gradient,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          },
        },
      },
    },
    JoyBox: {
      styleOverrides: {
        root: {
          '&.centered': {
            textAlign: 'center',
          },
          '&.flex-center': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '&.flex-between': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
      },
    },
  },
});

export { theme };
