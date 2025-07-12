import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Input,
  Textarea,
  Divider,
} from '@mui/joy';
import { NAVIGATION_ITEMS, THEME, TESTIMONIALS } from '../constants';
import { TestimonialProps } from '../types';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const slideIn = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ServiceCard = memo(
  ({
    title,
    description,
    icon,
    delay,
  }: {
    title: string;
    description: string;
    icon: string;
    delay: number;
  }) => (
    <Card
      variant='outlined'
      sx={{
        height: '100%',
        transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
        animation: `fadeInUp 0.6s ${THEME.transitions.easing.easeOut} forwards`,
        animationDelay: `${delay}s`,
        opacity: 0,
        borderRadius: THEME.borderRadius.lg,
        boxShadow: THEME.shadows.sm,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: THEME.shadows.lg,
        },
      }}
    >
      <CardContent>
        <Stack spacing={3} alignItems='center'>
          <Typography fontSize='3rem'>{icon}</Typography>
          <Typography
            level='h3'
            sx={{
              background: THEME.colors.primary.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {title}
          </Typography>
          <Typography
            level='body-md'
            textAlign='center'
            sx={{ color: THEME.colors.text.secondary }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
);

const Testimonial = memo(({ author, quote, role }: TestimonialProps) => (
  <Card
    variant='outlined'
    sx={{
      height: '100%',
      borderRadius: THEME.borderRadius.lg,
      boxShadow: THEME.shadows.sm,
      transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
      '&:hover': {
        boxShadow: THEME.shadows.md,
      },
    }}
  >
    <CardContent>
      <Stack spacing={3} alignItems='center'>
        <Avatar
          size='lg'
          alt={`${author}'s avatar`}
          sx={{
            bgcolor: THEME.colors.primary.main,
            width: 80,
            height: 80,
            fontSize: '2rem',
          }}
        >
          {author[0]}
        </Avatar>
        <Typography
          level='body-lg'
          sx={{
            fontStyle: 'italic',
            color: THEME.colors.text.primary,
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          "{quote}"
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            level='title-lg'
            sx={{ color: THEME.colors.text.primary }}
          >
            {author}
          </Typography>
          {role && (
            <Typography
              level='body-sm'
              sx={{ color: THEME.colors.text.secondary }}
            >
              {role}
            </Typography>
          )}
        </Box>
      </Stack>
    </CardContent>
  </Card>
));

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component='main'>
      {/* Skip Link for Accessibility */}
      <Button
        sx={{
          position: 'absolute',
          left: '-9999px',
          '&:focus': {
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
          },
        }}
        onClick={() => {
          const mainContent = document.getElementById('main-content');
          mainContent?.focus();
        }}
      >
        Skip to main content
      </Button>

      {/* Header Section */}
      <Box
        component='header'
        sx={{
          background: THEME.colors.primary.gradient,
          py: {
            xs: THEME.spacing.section.vertical.xs,
            md: THEME.spacing.section.vertical.md,
          },
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          boxShadow: THEME.shadows.md,
        }}
      >
        <Container maxWidth='lg'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
          >
            <Typography
              component='h1'
              level='h1'
              fontSize='clamp(1.5rem, 2vw, 2rem)'
              sx={{
                background: 'linear-gradient(45deg, #FFFFFF, #E3F2FD)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
              }}
            >
              SAPID Research
            </Typography>

            {/* Desktop Navigation */}
            <Stack
              direction='row'
              spacing={2}
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <Button
                  key={item.path}
                  variant='plain'
                  color='neutral'
                  onClick={() => {
                    if (item.path.startsWith('#')) {
                      const element = document.querySelector(item.path);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate(item.path);
                    }
                  }}
                  aria-label={item.ariaLabel}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            {/* Mobile Navigation */}
            <IconButton
              variant='outlined'
              color='neutral'
              sx={{
                display: { xs: 'flex', sm: 'none' },
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
              }}
              onClick={handleClick}
              aria-label='Open navigation menu'
              aria-expanded={open}
              aria-controls='mobile-menu'
            >
              ☰
            </IconButton>

            <Menu
              id='mobile-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                display: { xs: 'block', sm: 'none' },
                mt: 1,
              }}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => {
                    handleClose();
                    if (item.path.startsWith('#')) {
                      const element = document.querySelector(item.path);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate(item.path);
                    }
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          background: THEME.colors.primary.gradient,
          color: 'white',
          py: {
            xs: THEME.spacing.section.vertical.lg,
            md: Number(THEME.spacing.section.vertical.lg) * 1.5,
          },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={6} alignItems='center'>
            <Grid xs={12} md={8}>
              <Box
                sx={{
                  animation: `slideIn 0.8s ${THEME.transitions.easing.easeOut} forwards`,
                }}
              >
                <Typography
                  level='h1'
                  fontSize='clamp(2.5rem, 5vw, 4rem)'
                  sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #FFFFFF, #E3F2FD)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Transform Your Business with Data-Driven Insights
                </Typography>
                <Typography level='body-lg' sx={{ mb: 4, opacity: 0.9 }}>
                  At SAPID Research, we combine cutting-edge technology with
                  expert analysis to deliver actionable market insights that
                  drive growth and innovation.
                </Typography>
                <Button
                  size='lg'
                  variant='solid'
                  sx={{
                    backgroundColor: 'white',
                    color: THEME.colors.primary.main,
                    '&:hover': {
                      backgroundColor: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: THEME.shadows.md,
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        id='services'
        sx={{
          py: {
            xs: THEME.spacing.section.vertical.lg,
            md: Number(THEME.spacing.section.vertical.lg) * 1.5,
          },
          background: THEME.colors.background.default,
        }}
      >
        <Container maxWidth='lg'>
          <Typography
            level='h2'
            fontSize='clamp(2rem, 4vw, 3rem)'
            textAlign='center'
            sx={{
              mb: 8,
              background: THEME.colors.primary.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: '📊',
                title: 'Market Analysis',
                description:
                  'Comprehensive market research and competitive analysis to identify opportunities and threats.',
              },
              {
                icon: '🎯',
                title: 'Target Studies',
                description:
                  'In-depth consumer behavior analysis and audience segmentation for precise targeting.',
              },
              {
                icon: '📈',
                title: 'Growth Strategy',
                description:
                  'Data-driven strategies and actionable recommendations for sustainable business growth.',
              },
            ].map((service, index) => (
              <Grid xs={12} md={4} key={index}>
                <ServiceCard {...service} delay={0.2 * (index + 1)} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id='contact'
        sx={{
          py: {
            xs: THEME.spacing.section.vertical.lg,
            md: Number(THEME.spacing.section.vertical.lg) * 1.5,
          },
          background: THEME.colors.background.gradient,
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={6} alignItems='stretch'>
            <Grid xs={12} md={6}>
              <Card
                variant='outlined'
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: THEME.borderRadius.lg,
                  boxShadow: THEME.shadows.md,
                }}
              >
                <Typography
                  level='h2'
                  sx={{
                    mb: 4,
                    background: THEME.colors.primary.gradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold',
                  }}
                >
                  Get in Touch
                </Typography>
                <Typography
                  level='body-lg'
                  sx={{ mb: 4, color: THEME.colors.text.secondary }}
                >
                  Ready to transform your business? Contact us today for a
                  consultation.
                </Typography>
                <Stack spacing={3}>
                  <Input
                    size='lg'
                    placeholder='Your Name'
                    variant='outlined'
                    sx={{ borderRadius: THEME.borderRadius.md }}
                  />
                  <Input
                    size='lg'
                    placeholder='Email Address'
                    type='email'
                    variant='outlined'
                    sx={{ borderRadius: THEME.borderRadius.md }}
                  />
                  <Textarea
                    minRows={4}
                    size='lg'
                    placeholder='Your Message'
                    variant='outlined'
                    sx={{ borderRadius: THEME.borderRadius.md }}
                  />
                  <Button
                    size='lg'
                    variant='solid'
                    sx={{
                      mt: 2,
                      borderRadius: THEME.borderRadius.md,
                      background: THEME.colors.primary.gradient,
                      transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: THEME.shadows.md,
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                variant='outlined'
                sx={{
                  height: '100%',
                  p: 4,
                  background: THEME.colors.primary.gradient,
                  color: 'white',
                  borderRadius: THEME.borderRadius.lg,
                  boxShadow: THEME.shadows.md,
                }}
              >
                <Stack spacing={6}>
                  <Box>
                    <Typography level='h3' sx={{ mb: 2, color: 'white' }}>
                      Visit Us
                    </Typography>
                    <Typography level='body-md' sx={{ opacity: 0.9 }}>
                      123 Research Avenue
                      <br />
                      Innovation District
                      <br />
                      Research City, 12345
                    </Typography>
                  </Box>
                  <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
                  <Box>
                    <Typography level='h3' sx={{ mb: 2, color: 'white' }}>
                      Contact Info
                    </Typography>
                    <Typography level='body-md' sx={{ opacity: 0.9 }}>
                      Email: contact@sapidresearch.com
                      <br />
                      Phone: (123) 456-7890
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          py: {
            xs: THEME.spacing.section.vertical.lg,
            md: Number(THEME.spacing.section.vertical.lg) * 1.5,
          },
          background: THEME.colors.background.default,
        }}
      >
        <Container maxWidth='lg'>
          <Typography
            level='h2'
            fontSize='clamp(2rem, 4vw, 3rem)'
            textAlign='center'
            sx={{
              mb: 8,
              background: THEME.colors.primary.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
            }}
          >
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            {TESTIMONIALS.map((testimonial, index) => (
              <Grid xs={12} md={4} key={index}>
                <Testimonial {...testimonial} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default memo(Main);
