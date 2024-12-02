import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
} from '@mui/material';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerImages = [
    {
        url: 'https://source.unsplash.com/1600x900/?temple',
        title: 'Cultural Heritage',
        description: 'Preserving our rich traditions and cultural values'
    },
    {
        url: 'https://source.unsplash.com/1600x900/?education',
        title: 'Education Initiative',
        description: 'Supporting the future through quality education'
    },
    {
        url: 'https://source.unsplash.com/1600x900/?community',
        title: 'Community Service',
        description: 'Building stronger communities together'
    }
];

const Home = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
                <Slider {...carouselSettings}>
                    {bannerImages.map((banner, index) => (
                        <Box key={index}>
                            <Box
                                sx={{
                                    height: '100vh',
                                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Container>
                                    <Typography
                                        variant="h2"
                                        component="h1"
                                        align="center"
                                        gutterBottom
                                        sx={{ color: 'white', mb: 2 }}
                                    >
                                        {banner.title}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        align="center"
                                        sx={{ color: 'white', mb: 4 }}
                                    >
                                        {banner.description}
                                    </Typography>
                                </Container>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 15,
                    background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Container>
                    <Typography
                        variant="h1"
                        component="h1"
                        align="center"
                        gutterBottom
                        sx={{ mb: 4 }}
                    >
                        Shri Bangalore Gujarati BrahmSamaj Trust
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        paragraph
                        sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
                    >
                        The Brahmin Samaj should strive to be a pillar of spiritual,
                        educational, and social progress, while adapting to modern needs and
                        challenges. A balanced focus on tradition, reform, and service is
                        important.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={() => scrollToSection('activities')}
                            sx={{ mr: 2 }}
                        >
                            Our Activities
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            onClick={() => scrollToSection('contact')}
                            sx={{ color: 'white', borderColor: 'white' }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Container sx={{ py: 8 }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Our Mission
                </Typography>
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    {[
                        {
                            title: 'Spiritual Growth',
                            description:
                                'Promoting spiritual awareness and traditional values in modern context',
                        },
                        {
                            title: 'Education',
                            description:
                                'Supporting educational initiatives and scholarship programs',
                        },
                        {
                            title: 'Community Service',
                            description:
                                'Organizing social welfare activities and community support',
                        },
                    ].map((item) => (
                        <Grid item xs={12} md={4} key={item.title}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography>{item.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;