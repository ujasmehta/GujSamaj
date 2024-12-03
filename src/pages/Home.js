import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, Button } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  {
    image: '/images/slide1.jpg',
    title: 'Make a Difference',
    description: 'Your support can change lives. Join us in making the world a better place.',
  },
  {
    image: '/images/slide2.jpg',
    title: 'Support Our Cause',
    description: 'Every donation counts. Help us reach more people in need.',
  },
  {
    image: '/images/slide3.jpg',
    title: 'Create Impact',
    description: 'Together we can create lasting impact in our communities.',
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ width: '50%', margin: '0 auto' }}>
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <Box key={index}>
              <Box
                sx={{
                  position: 'relative',
                  height: '60vh',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    width: '80%',
                    zIndex: 1,
                  }}
                >
                  <Typography variant="h3" component="h1" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="h6" paragraph>
                    {item.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="#fundraiser"
                    sx={{ mt: 2 }}
                  >
                    Donate Now
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Welcome to Our NGO
        </Typography>
        <Typography variant="body1" paragraph align="center">
          We are dedicated to making a positive impact in our community through various
          initiatives and programs. Your support helps us reach more people in need
          and create lasting change.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#activities"
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;