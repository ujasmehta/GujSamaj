import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Contact from './pages/Contacts';
import Fundraiser from './pages/Fundraiser';
import { Box } from '@mui/material';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
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
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;