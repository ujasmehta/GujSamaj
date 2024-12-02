import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
  } from '@mui/material';
  import { useState } from 'react';
  
  const Fundraiser = () => {
    const [donationData, setDonationData] = useState({
      name: '',
      email: '',
      amount: '',
      paymentMethod: '',
      message: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle donation submission here
      console.log('Donation submitted:', donationData);
    };
  
    const handleChange = (e) => {
      setDonationData({
        ...donationData,
        [e.target.name]: e.target.value,
      });
    };
  
    const causes = [
      {
        title: 'Education Fund',
        description: 'Support education for underprivileged students',
        target: '₹5,00,000',
        raised: '₹2,50,000',
      },
      {
        title: 'Temple Renovation',
        description: 'Help maintain and renovate our spiritual spaces',
        target: '₹10,00,000',
        raised: '₹6,00,000',
      },
      {
        title: 'Community Kitchen',
        description: 'Support our food distribution program',
        target: '₹3,00,000',
        raised: '₹1,50,000',
      },
    ];
  
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
              Support Our Cause
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Your contribution makes a difference
            </Typography>
          </Container>
        </Box>
  
        <Container sx={{ py: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" gutterBottom>
                Current Initiatives
              </Typography>
              <Stack spacing={3}>
                {causes.map((cause, index) => (
                  <Card key={index}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {cause.title}
                      </Typography>
                      <Typography paragraph>{cause.description}</Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography color="primary">Target: {cause.target}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography color="secondary">
                            Raised: {cause.raised}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
  
            <Grid item xs={12} md={5}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Make a Donation
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={donationData.name}
                        onChange={handleChange}
                        required
                      />
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={donationData.email}
                        onChange={handleChange}
                        required
                      />
                      <FormControl fullWidth required>
                        <InputLabel>Amount</InputLabel>
                        <Select
                          name="amount"
                          value={donationData.amount}
                          onChange={handleChange}
                          label="Amount"
                        >
                          <MenuItem value={1000}>₹1,000</MenuItem>
                          <MenuItem value={2000}>₹2,000</MenuItem>
                          <MenuItem value={5000}>₹5,000</MenuItem>
                          <MenuItem value={10000}>₹10,000</MenuItem>
                          <MenuItem value="other">Other Amount</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth required>
                        <InputLabel>Payment Method</InputLabel>
                        <Select
                          name="paymentMethod"
                          value={donationData.paymentMethod}
                          onChange={handleChange}
                          label="Payment Method"
                        >
                          <MenuItem value="upi">UPI</MenuItem>
                          <MenuItem value="card">Credit/Debit Card</MenuItem>
                          <MenuItem value="netbanking">Net Banking</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        fullWidth
                        label="Message (Optional)"
                        name="message"
                        multiline
                        rows={3}
                        value={donationData.message}
                        onChange={handleChange}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Donate Now
                      </Button>
                    </Stack>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };
  
  export default Fundraiser;