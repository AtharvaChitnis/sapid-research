import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Container, Button, Stack, Grid } from '@mui/joy';
import { keyframes } from '@mui/system';
import { THEME } from '../constants';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    document.body.classList.add('page-exit');
    setTimeout(() => {
      navigate('/main');
    }, THEME.transitions.duration.medium);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: THEME.colors.primary.gradient,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: THEME.spacing.grid.lg,
          padding: THEME.spacing.section.horizontal.lg,
        }}
      >
        {/* Left third - Empty for balance */}
        <Box />

        {/* Center third - Main content */}
        <Stack
          spacing={4}
          sx={{
            gridColumn: '2 / 3',
            alignSelf: 'center',
            textAlign: 'center',
            animation: `${fadeIn} 1s ${THEME.transitions.easing.easeOut}`,
          }}
        >
          <Typography
            component="h1"
            level="h1"
            fontSize="clamp(3rem, 5vw, 5rem)"
            sx={{
              background: 'linear-gradient(45deg, #FFFFFF, #E3F2FD)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: THEME.shadows.lg,
              mb: 2,
              fontWeight: 'bold',
            }}
          >
            SAPID Research
          </Typography>

          <Typography
            level="h2"
            fontSize="clamp(1.5rem, 2vw, 2rem)"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              fontWeight: 'light',
            }}
          >
            Innovative Market Research Solutions
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              size="lg"
              variant="solid"
              sx={{
                backgroundColor: 'white',
                color: THEME.colors.primary.main,
                fontSize: 'lg',
                px: 6,
                py: 2,
                borderRadius: THEME.borderRadius.lg,
                transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
                boxShadow: THEME.shadows.md,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: THEME.shadows.lg,
                  backgroundColor: 'white',
                },
              }}
              onClick={handleExplore}
            >
              Explore Our Services
            </Button>
          </Box>
        </Stack>

        {/* Right third - Empty for balance */}
        <Box />
      </Container>

      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '20vw',
          height: '20vw',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: `${fadeIn} 2s ${THEME.transitions.easing.easeOut}`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '15vw',
          height: '15vw',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: `${fadeIn} 2.5s ${THEME.transitions.easing.easeOut}`,
        }}
      />
    </Box>
  );
};

export default LandingPage;
