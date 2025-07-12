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
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: THEME.borderRadius.lg,
          transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
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
  },
});

export { theme };
