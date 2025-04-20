import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#780000',
    },
    secondary: {
      main: '#C1121F',
    },
    background: {
      default: '#FDF0D5',
      special: '#003049'
    },
    text: {
      primary: '#003049', // Deep Navy Blue for primary text
      secondary: '#FDF0D5',
      special: '#669BBC', // Muted Blue for secondary text
    },
    action: {
      active: '#669BBC', // Muted Blue for secondary action elements
      hover: '#C1121F', // Crimson Red for hover states
      selected: '#780000', // Dark Red for selected states
    },
    error: {
      main: '#780000', // Error color (strong red for errors)
    },
    success: {
      main: '#388E3C', // Success color (green for success messages)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      color: '#003049', // Deep Navy Blue for main headings
      '@media (max-width:600px)': {
        fontSize: '2rem', // Adjust for small screens
      },
    },
    h2: {
      fontSize: '2rem',
      color: '#003049', // Deep Navy Blue for subheadings
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      color: '#003049', // Deep Navy Blue for smaller headings
      '@media (max-width:600px)': {
        fontSize: '1.35rem',
      },
    },
    body1: {
      fontSize: '1rem',
      color: '#003049', // Primary text color
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      fontSize: '0.9rem',
      fontWeight: 400,
      color: '#669BBC', // Muted Blue for secondary text
    },
  },
  breakpoints: {
    values: {
      xs: 0,   // mobile
      sm: 600, // tablet
      md: 960, // small desktop
      lg: 1280, // large desktop
      xl: 1920, // extra large screen
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#780000', // Dark Red for primary button color
          color: '#FFFFFF', // White text for button labels
          '&:hover': {
            backgroundColor: '#C1121F', // Crimson Red for button hover
          },
          '@media (max-width:600px)': {
            fontSize: '0.75rem', // Make button text smaller on small screens
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#780000', // Dark Red for links
          '&:hover': {
            color: '#C1121F', // Crimson Red for link hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#003049', // Deep Navy Blue for app bar
          '@media (max-width:600px)': {
            padding: '0 8px', // Reduce app bar padding for smaller screens
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FDF0D5', 
          '@media (max-width:600px)': {
            width: '200px', 
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#003049', // Deep Navy Blue for main headings
        },
        h2: {
          color: '#003049', // Deep Navy Blue for subheadings
        },
        body1: {
          color: '#003049', // Deep Navy Blue for body text
        },
        body2: {
          color: '#669BBC', // Muted Blue for secondary body text
        },
      },
    },
  },
});

export default theme;
