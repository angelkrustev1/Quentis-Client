// theme.js or theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25CED1', // Aqua Blue
    },
    secondary: {
      main: '#FF8A5B', // Coral Orange
    },
    background: {
      default: '#FCEADE',     // Soft Peach as main background
      special: '#FF8A5B',     // Coral used for highlights or accents
    },
    text: {
      primary: '#011627',     // Deep Navy (replaces white for contrast)
      secondary: '#EA526F',   // Raspberry for soft content
      special: '#25CED1',     // Aqua Blue for highlights
    },
    action: {
      active: '#25CED1',      // Aqua
      hover: '#FF8A5B',       // Coral hover
      selected: '#EA526F',    // Raspberry selected
    },
    error: {
      main: '#EA526F',        // Raspberry for errors
    },
    success: {
      main: '#6FCF97',        // A friendly green
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      color: '#011627', // Strong header contrast
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      color: '#011627',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      color: '#EA526F',
      '@media (max-width:600px)': {
        fontSize: '1.35rem',
      },
    },
    body1: {
      fontSize: '1rem',
      color: '#011627',
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      fontSize: '0.9rem',
      fontWeight: 400,
      color: '#25CED1',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#25CED1',
          color: '#011627',
          '&:hover': {
            backgroundColor: '#FF8A5B',
          },
          '@media (max-width:600px)': {
            fontSize: '0.75rem',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#EA526F',
          '&:hover': {
            color: '#FF8A5B',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#25CED1',
          color: '#011627',
          '@media (max-width:600px)': {
            padding: '0 8px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FCEADE',
          '@media (max-width:600px)': {
            width: '200px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#011627',
        },
        h2: {
          color: '#011627',
        },
        body1: {
          color: '#011627',
        },
        body2: {
          color: '#25CED1',
        },
      },
    },
  },
});

export default theme;
