import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
} from '@mui/joy';
import { THEME } from '../constants';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: THEME.colors.background.gradient,
        py: THEME.spacing.section.vertical.lg,
      }}
    >
      <Container maxWidth='lg'>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component='h1'
            level='h1'
            fontSize='clamp(2.5rem, 4vw, 4rem)'
            sx={{
              background: THEME.colors.primary.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
              fontWeight: 'bold',
            }}
          >
            About SAPID Research
          </Typography>
          <Typography
            level='h2'
            fontSize='clamp(1.2rem, 1.5vw, 1.5rem)'
            sx={{
              color: THEME.colors.text.secondary,
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Pioneering market research solutions with data-driven insights and innovative methodologies
          </Typography>
          <Button
            variant='outlined'
            size='lg'
            onClick={handleBackToHome}
            sx={{
              borderColor: THEME.colors.primary.main,
              color: THEME.colors.primary.main,
              '&:hover': {
                borderColor: THEME.colors.primary.dark,
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
              },
            }}
          >
            Back to Home
          </Button>
        </Box>

        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid xs={12} md={6}>
            <Card
              variant='outlined'
              sx={{
                height: '100%',
                borderRadius: THEME.borderRadius.lg,
                boxShadow: THEME.shadows.sm,
                transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
                '&:hover': {
                  boxShadow: THEME.shadows.lg,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent>
                <Stack spacing={3}>
                  <Typography fontSize='3rem' sx={{ textAlign: 'center' }}>
                    🎯
                  </Typography>
                  <Typography
                    level='h3'
                    sx={{
                      background: THEME.colors.primary.gradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      textAlign: 'center',
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    level='body-lg'
                    sx={{ color: THEME.colors.text.secondary, textAlign: 'center' }}
                  >
                    To empower businesses with actionable market insights through innovative research methodologies and cutting-edge data analysis.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card
              variant='outlined'
              sx={{
                height: '100%',
                borderRadius: THEME.borderRadius.lg,
                boxShadow: THEME.shadows.sm,
                transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
                '&:hover': {
                  boxShadow: THEME.shadows.lg,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent>
                <Stack spacing={3}>
                  <Typography fontSize='3rem' sx={{ textAlign: 'center' }}>
                    🔮
                  </Typography>
                  <Typography
                    level='h3'
                    sx={{
                      background: THEME.colors.primary.gradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      textAlign: 'center',
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    level='body-lg'
                    sx={{ color: THEME.colors.text.secondary, textAlign: 'center' }}
                  >
                    To be the leading force in market research innovation, driving business success through unparalleled insights and strategic guidance.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Company Story */}
        <Card
          variant='outlined'
          sx={{
            borderRadius: THEME.borderRadius.lg,
            boxShadow: THEME.shadows.sm,
            mb: 6,
          }}
        >
          <CardContent>
            <Stack spacing={4}>
              <Typography
                level='h2'
                sx={{
                  background: THEME.colors.primary.gradient,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textAlign: 'center',
                }}
              >
                Our Story
              </Typography>
              <Typography
                level='body-lg'
                sx={{ color: THEME.colors.text.secondary, lineHeight: 1.8 }}
              >
                Founded with a passion for transforming raw data into strategic insights, SAPID Research has been at the forefront of market research innovation for over a decade. Our team of experienced analysts, data scientists, and industry experts work collaboratively to deliver comprehensive research solutions that drive business growth and competitive advantage.
              </Typography>
              <Typography
                level='body-lg'
                sx={{ color: THEME.colors.text.secondary, lineHeight: 1.8 }}
              >
                We believe that successful market research goes beyond numbers—it requires deep understanding of consumer behavior, market dynamics, and emerging trends. Our proprietary methodologies and advanced analytics tools enable us to uncover hidden opportunities and provide actionable recommendations that our clients can trust.
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            level='h2'
            sx={{
              background: THEME.colors.primary.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 4,
            }}
          >
            Our Expertise
          </Typography>
          <Grid container spacing={3}>
            {[
              { icon: '📊', title: 'Data Analytics', desc: 'Advanced statistical analysis and predictive modeling' },
              { icon: '🔍', title: 'Market Research', desc: 'Comprehensive market analysis and competitive intelligence' },
              { icon: '👥', title: 'Consumer Insights', desc: 'Deep understanding of consumer behavior and preferences' },
              { icon: '📈', title: 'Strategic Consulting', desc: 'Data-driven strategic recommendations and planning' },
            ].map((expertise, index) => (
              <Grid xs={12} sm={6} md={3} key={index}>
                <Card
                  variant='outlined'
                  sx={{
                    height: '100%',
                    borderRadius: THEME.borderRadius.lg,
                    boxShadow: THEME.shadows.sm,
                    transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
                    '&:hover': {
                      boxShadow: THEME.shadows.md,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems='center'>
                      <Typography fontSize='2.5rem'>{expertise.icon}</Typography>
                      <Typography
                        level='h4'
                        sx={{ color: THEME.colors.text.primary, fontWeight: 'bold' }}
                      >
                        {expertise.title}
                      </Typography>
                      <Typography
                        level='body-sm'
                        sx={{ color: THEME.colors.text.secondary, textAlign: 'center' }}
                      >
                        {expertise.desc}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
