import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
  } from '@mui/material';
  
  const Activities = () => {
    const activities = [
      {
        title: 'Spiritual Sessions',
        description: 'Regular vedic classes and spiritual discourse sessions',
        image: 'https://source.unsplash.com/random/800x600/?temple',
      },
      {
        title: 'Educational Programs',
        description: 'Scholarship programs and educational support for students',
        image: 'https://source.unsplash.com/random/800x600/?education',
      },
      {
        title: 'Community Service',
        description: 'Regular community service activities and social welfare programs',
        image: 'https://source.unsplash.com/random/800x600/?community',
      },
      {
        title: 'Cultural Events',
        description: 'Traditional cultural events and celebrations',
        image: 'https://source.unsplash.com/random/800x600/?culture',
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
              Our Activities
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Discover the various ways we serve our community
            </Typography>
          </Container>
        </Box>
  
        <Container sx={{ py: 4 }}>
          <Grid container spacing={4}>
            {activities.map((activity, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 260 }}
                    image={activity.image}
                    alt={activity.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {activity.title}
                    </Typography>
                    <Typography>{activity.description}</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  };
  
  export default Activities;