import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
      light: '#3498db',
      dark: '#2980b9',
    },
    secondary: {
      main: '#27ae60',
      light: '#2ecc71',
      dark: '#219a52',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

export default theme;