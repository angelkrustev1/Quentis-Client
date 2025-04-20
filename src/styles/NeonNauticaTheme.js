import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#011627', // Midnight Navy
    },
    secondary: {
      main: '#2EC4B6', // Aqua Mint
    },
    background: {
      default: '#FDFFFC', // Near White
      special: '#011627', // For darker sections or elements
    },
    text: {
      primary: '#011627', // Dark text
      secondary: '#2EC4B6', // Accent text
      special: '#FF9F1C',  // Highlighted text
    },
    action: {
      active: '#FF9F1C',   // Sunset Orange
      hover: '#2EC4B6',
      selected: '#011627',
    },
    error: {
      main: '#E71D36', // Vivid Red
    },
    success: {
      main: '#2EC4B6', // Aqua for positive feedback
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      color: '#011627',
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
      color: '#2EC4B6',
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
      color: '#FF9F1C',
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
          backgroundColor: '#011627',
          color: '#FDFFFC',
          '&:hover': {
            backgroundColor: '#2EC4B6',
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
          color: '#FF9F1C',
          '&:hover': {
            color: '#E71D36',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#011627',
          '@media (max-width:600px)': {
            padding: '0 8px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FDFFFC',
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
          color: '#FF9F1C',
        },
      },
    },
  },
});

export default theme;
