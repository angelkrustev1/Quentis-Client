import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#386641', // Deep Forest Green
    },
    secondary: {
      main: '#6A994E', // Leaf Green
    },
    background: {
      default: '#F2E8CF', // Soft Beige
      special: '#A7C957', // Highlight color
    },
    text: {
      primary: '#386641', // Dark green for main text
      secondary: '#6A994E', // Lighter green for secondary text
      special: '#BC4749', // Rusty red as an accent
    },
    action: {
      active: '#A7C957', // Lime green for interactive elements
      hover: '#6A994E',  // Leaf green for hover states
      selected: '#386641', // Deep green for selected state
    },
    error: {
      main: '#BC4749', // Rusty Red for errors
    },
    success: {
      main: '#6A994E', // Use leaf green as success
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      color: '#386641',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      color: '#386641',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      color: '#386641',
      '@media (max-width:600px)': {
        fontSize: '1.35rem',
      },
    },
    body1: {
      fontSize: '1rem',
      color: '#386641',
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      fontSize: '0.9rem',
      fontWeight: 400,
      color: '#6A994E',
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
          backgroundColor: '#386641',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#6A994E',
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
          color: '#386641',
          '&:hover': {
            color: '#6A994E',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#BC4749', // Rusty Red for strong contrast
          '@media (max-width:600px)': {
            padding: '0 8px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F2E8CF',
          '@media (max-width:600px)': {
            width: '200px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#386641',
        },
        h2: {
          color: '#386641',
        },
        body1: {
          color: '#386641',
        },
        body2: {
          color: '#6A994E',
        },
      },
    },
  },
});

export default theme;
