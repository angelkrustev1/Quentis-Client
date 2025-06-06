import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BC6C25', // was 780000
    },
    secondary: {
      main: '#DDA15E', // was C1121F
    },
    background: {
      default: '#FEFAE0', // was FDF0D5
      special: '#283618', // was 003049
    },
    text: {
      primary: '#283618', // was 003049
      secondary: '#FEFAE0', // was FDF0D5
      special: '#606C38', // was 669BBC
    },
    action: {
      active: '#606C38', // was 669BBC
      hover: '#DDA15E', // was C1121F
      selected: '#BC6C25', // was 780000
    },
    error: {
      main: '#BC6C25', // was 780000
    },
    success: {
      main: '#388E3C', // unchanged
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      color: '#283618', // was 003049
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      color: '#283618', // was 003049
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      color: '#283618', // was 003049
      '@media (max-width:600px)': {
        fontSize: '1.35rem',
      },
    },
    body1: {
      fontSize: '1rem',
      color: '#283618', // was 003049
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      fontSize: '0.9rem',
      fontWeight: 400,
      color: '#606C38', // was 669BBC
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
          backgroundColor: '#BC6C25', // was 780000
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#DDA15E', // was C1121F
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
          color: '#BC6C25', // was 780000
          '&:hover': {
            color: '#DDA15E', // was C1121F
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#283618', // was 003049
          '@media (max-width:600px)': {
            padding: '0 8px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FEFAE0', // was FDF0D5
          '@media (max-width:600px)': {
            width: '200px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#283618', // was 003049
        },
        h2: {
          color: '#283618', // was 003049
        },
        body1: {
          color: '#283618', // was 003049
        },
        body2: {
          color: '#606C38', // was 669BBC
        },
      },
    },
  },
});

export default theme;
