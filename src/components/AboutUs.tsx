import React from 'react';
import {
  Typography,
  Container,
  Button,
  Grid,
  CardContent,
  Stack,
} from '@mui/joy';
import { THEME } from '../constants';
import { useNavigation } from '../hooks';
import { PageContainer, CenteredBox, GradientText, HoverCard } from './common';

const AboutUs: React.FC = () => {
  const { navigateToHome } = useNavigation();

  return (
    <PageContainer background='gradient'>
      <Container maxWidth='lg'>
        {/* Header Section */}
        <CenteredBox sx={{ mb: 6 }}>
          <GradientText
            component='h1'
            level='h1'
            fontSize='clamp(2.5rem, 4vw, 4rem)'
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            About SAPID Research
          </GradientText>
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
            Pioneering market research solutions with data-driven insights and
            innovative methodologies
          </Typography>
          <Button
            variant='outlined'
            size='lg'
            onClick={navigateToHome}
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
        </CenteredBox>

        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid xs={12} md={6}>
            <HoverCard variant='outlined' sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={3}>
                  <CenteredBox>
                    <Typography fontSize='3rem'>🎯</Typography>
                  </CenteredBox>
                  <GradientText level='h3' sx={{ textAlign: 'center' }}>
                    Our Mission
                  </GradientText>
                  <Typography
                    level='body-lg'
                    sx={{
                      color: THEME.colors.text.secondary,
                      textAlign: 'center',
                    }}
                  >
                    To empower businesses with actionable market insights
                    through innovative research methodologies and cutting-edge
                    data analysis.
                  </Typography>
                </Stack>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid xs={12} md={6}>
            <HoverCard variant='outlined' sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={3}>
                  <CenteredBox>
                    <Typography fontSize='3rem'>🔮</Typography>
                  </CenteredBox>
                  <GradientText level='h3' sx={{ textAlign: 'center' }}>
                    Our Vision
                  </GradientText>
                  <Typography
                    level='body-lg'
                    sx={{
                      color: THEME.colors.text.secondary,
                      textAlign: 'center',
                    }}
                  >
                    To be the leading force in market research innovation,
                    driving business success through unparalleled insights and
                    strategic guidance.
                  </Typography>
                </Stack>
              </CardContent>
            </HoverCard>
          </Grid>
        </Grid>

        {/* Company Story */}
        <HoverCard variant='outlined' hoverEffect={false} sx={{ mb: 6 }}>
          <CardContent>
            <Stack spacing={4}>
              <GradientText level='h2' sx={{ textAlign: 'center' }}>
                Our Story
              </GradientText>
              <Typography
                level='body-lg'
                sx={{ color: THEME.colors.text.secondary, lineHeight: 1.8 }}
              >
                Founded with a passion for transforming raw data into strategic
                insights, SAPID Research has been at the forefront of market
                research innovation for over a decade. Our team of experienced
                analysts, data scientists, and industry experts work
                collaboratively to deliver comprehensive research solutions that
                drive business growth and competitive advantage.
              </Typography>
              <Typography
                level='body-lg'
                sx={{ color: THEME.colors.text.secondary, lineHeight: 1.8 }}
              >
                We believe that successful market research goes beyond
                numbers—it requires deep understanding of consumer behavior,
                market dynamics, and emerging trends. Our proprietary
                methodologies and advanced analytics tools enable us to uncover
                hidden opportunities and provide actionable recommendations that
                our clients can trust.
              </Typography>
            </Stack>
          </CardContent>
        </HoverCard>

        {/* Team Section */}
        <CenteredBox>
          <GradientText level='h2' sx={{ mb: 4 }}>
            Our Expertise
          </GradientText>
          <Grid container spacing={3}>
            {[
              {
                icon: '📊',
                title: 'Data Analytics',
                desc: 'Advanced statistical analysis and predictive modeling',
              },
              {
                icon: '🔍',
                title: 'Market Research',
                desc: 'Comprehensive market analysis and competitive intelligence',
              },
              {
                icon: '👥',
                title: 'Consumer Insights',
                desc: 'Deep understanding of consumer behavior and preferences',
              },
              {
                icon: '📈',
                title: 'Strategic Consulting',
                desc: 'Data-driven strategic recommendations and planning',
              },
            ].map((expertise, index) => (
              <Grid xs={12} sm={6} md={3} key={index}>
                <HoverCard
                  variant='outlined'
                  elevation='sm'
                  sx={{ height: '100%' }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems='center'>
                      <Typography fontSize='2.5rem'>
                        {expertise.icon}
                      </Typography>
                      <Typography
                        level='h4'
                        sx={{
                          color: THEME.colors.text.primary,
                          fontWeight: 'bold',
                        }}
                      >
                        {expertise.title}
                      </Typography>
                      <Typography
                        level='body-sm'
                        sx={{
                          color: THEME.colors.text.secondary,
                          textAlign: 'center',
                        }}
                      >
                        {expertise.desc}
                      </Typography>
                    </Stack>
                  </CardContent>
                </HoverCard>
              </Grid>
            ))}
          </Grid>
        </CenteredBox>
      </Container>
    </PageContainer>
  );
};

export default AboutUs;
