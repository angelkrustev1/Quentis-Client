import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#606C38', // Olive Green
    },
    secondary: {
      main: '#283618', // Dark Olive
    },
    background: {
      default: '#FEFAE0', // Cream
      special: '#283618'  // Dark Olive
    },
    text: {
      primary: '#283618', // Dark Olive for primary text
      secondary: '#FEFAE0', // Cream for contrast
      special: '#DDA15E', // Warm Ochre for highlights or subtle accents
    },
    action: {
      active: '#DDA15E', // Warm Ochre
      hover: '#DDA15E',  // Same for hover state
      selected: '#BC6C25', // Burnt Orange
    },
    error: {
      main: '#BC6C25', // Burnt Orange as a warmer error color
    },
    success: {
      main: '#388E3C', // Green (unchanged)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      color: '#283618',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      color: '#283618',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      color: '#283618',
      '@media (max-width:600px)': {
        fontSize: '1.35rem',
      },
    },
    body1: {
      fontSize: '1rem',
      color: '#283618',
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      fontSize: '0.9rem',
      fontWeight: 400,
      color: '#DDA15E', // Warm Ochre
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
          backgroundColor: '#606C38',
          color: '#FEFAE0',
          '&:hover': {
            backgroundColor: '#DDA15E',
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
          color: '#606C38',
          '&:hover': {
            color: '#DDA15E',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#283618',
          '@media (max-width:600px)': {
            padding: '0 8px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FEFAE0',
          '@media (max-width:600px)': {
            width: '200px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#283618',
        },
        h2: {
          color: '#283618',
        },
        body1: {
          color: '#283618',
        },
        body2: {
          color: '#DDA15E',
        },
      },
    },
  },
});

export default theme;
