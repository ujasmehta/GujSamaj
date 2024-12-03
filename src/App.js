import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AdminRoutes from './routes/AdminRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Contact from './pages/Contacts';
import Fundraiser from './pages/Fundraiser';
import { Box } from '@mui/material';

// Create theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          
          {/* Public routes */}
          <Route
            path="/*"
            element={
              <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <Box component="main" sx={{ flexGrow: 1 }}>
                  <Routes>
                    <Route path="/" element={
                      <>
                        <section id="home">
                          <Home />
                        </section>
                        <section id="activities">
                          <Activities />
                        </section>
                        <section id="fundraiser">
                          <Fundraiser />
                        </section>
                        <section id="contact">
                          <Contact />
                        </section>
                      </>
                    } />
                    {/* Add other public routes here */}
                  </Routes>
                </Box>
                <Footer />
              </Box>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;