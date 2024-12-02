import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Stack,
  } from '@mui/material';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import PhoneIcon from '@mui/icons-material/Phone';
  import EmailIcon from '@mui/icons-material/Email';
  import { useState } from 'react';
  
  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Form submitted:', formData);
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 6,
            mb: 6,
          }}
        >
          <Container>
            <Typography variant="h2" align="center" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Get in touch with us for any queries or support
            </Typography>
          </Container>
        </Box>
  
        <Container sx={{ py: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <LocationOnIcon color="primary" />
                      <Box>
                        <Typography variant="h6">Address</Typography>
                        <Typography>123 Temple Street, Bangalore, Karnataka</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
  
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <PhoneIcon color="primary" />
                      <Box>
                        <Typography variant="h6">Phone</Typography>
                        <Typography>+91 XXXXXXXXXX</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
  
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <EmailIcon color="primary" />
                      <Box>
                        <Typography variant="h6">Email</Typography>
                        <Typography>info@bgbrahmsamaj.org</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
  
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Send us a Message
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };
  
  export default Contact;