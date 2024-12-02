import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Shri Bangalore Gujarati BrahmSamaj Trust is dedicated to serving
              the community through spiritual guidance and social welfare.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/activities" color="inherit" display="block">
              Activities
            </Link>
            <Link href="/fundraiser" color="inherit" display="block">
              Fundraiser
            </Link>
            <Link href="/contact" color="inherit" display="block">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2">
              Email: info@bgbrahmsamaj.org
              <br />
              Phone: +91 XXXXXXXXXX
              <br />
              Address: Bangalore, Karnataka
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          © 2024 All rights reserved by Ishtva Technologies
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;