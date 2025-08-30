import React from 'react';
import {
  Typography,
  Container,
  Button,
  Grid,
  CardContent,
  Stack,
  Chip,
  Box,
} from '@mui/joy';
import { THEME } from '../constants';
import { useNavigation } from '../hooks';
import { 
  PageContainer, 
  CenteredBox, 
  GradientText, 
  HoverCard,
  FlexBox
} from './common';

const Services: React.FC = () => {
  const { navigateToHome, navigateToContact, navigateToOpinions } = useNavigation();

  const services = [
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'Comprehensive market research and competitive analysis to identify opportunities and threats in your industry.',
      features: ['Competitive Intelligence', 'Market Size Assessment', 'Trend Analysis', 'SWOT Analysis'],
      category: 'Research'
    },
    {
      icon: '👥',
      title: 'Consumer Research',
      description: 'Deep dive into consumer behavior, preferences, and decision-making processes to understand your target audience.',
      features: ['Focus Groups', 'Surveys', 'Behavioral Analysis', 'Persona Development'],
      category: 'Research'
    },
    {
      icon: '📈',
      title: 'Data Analytics',
      description: 'Advanced statistical analysis and predictive modeling to extract meaningful insights from complex datasets.',
      features: ['Predictive Modeling', 'Statistical Analysis', 'Data Visualization', 'Performance Metrics'],
      category: 'Analytics'
    },
    {
      icon: '🎯',
      title: 'Strategic Consulting',
      description: 'Data-driven strategic recommendations to optimize business performance and drive growth.',
      features: ['Business Strategy', 'Performance Optimization', 'Growth Planning', 'Risk Assessment'],
      category: 'Consulting'
    },
    {
      icon: '🔍',
      title: 'Product Research',
      description: 'Comprehensive product research to validate concepts, optimize features, and maximize market success.',
      features: ['Concept Testing', 'Feature Optimization', 'Pricing Strategy', 'Launch Planning'],
      category: 'Research'
    },
    {
      icon: '📋',
      title: 'Custom Reports',
      description: 'Tailored research reports and presentations designed to meet your specific business objectives.',
      features: ['Custom Analysis', 'Executive Summaries', 'Actionable Insights', 'Follow-up Support'],
      category: 'Reporting'
    }
  ];

  const categories = ['All', 'Research', 'Analytics', 'Consulting', 'Reporting'];

  return (
    <PageContainer background="gradient">
      <Container maxWidth='lg'>
        {/* Header Section */}
        <CenteredBox sx={{ mb: 6 }}>
          <GradientText
            component='h1'
            level='h1'
            fontSize='clamp(2.5rem, 4vw, 4rem)'
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            Our Services
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
            Comprehensive market research solutions tailored to your business needs
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

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid xs={12} md={6} lg={4} key={index}>
              <HoverCard
                variant='outlined'
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <CenteredBox>
                      <Typography fontSize='3rem'>{service.icon}</Typography>
                    </CenteredBox>
                    
                    <Box>
                      <GradientText
                        level='h3'
                        sx={{ mb: 1, fontWeight: 'bold' }}
                      >
                        {service.title}
                      </GradientText>
                      <Chip
                        size='sm'
                        variant='soft'
                        sx={{
                          bgcolor: 'rgba(46, 125, 50, 0.1)',
                          color: THEME.colors.primary.main,
                          mb: 2,
                        }}
                      >
                        {service.category}
                      </Chip>
                    </Box>

                    <Typography
                      level='body-md'
                      sx={{ 
                        color: THEME.colors.text.secondary,
                        lineHeight: 1.6,
                        mb: 2
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Box>
                      <Typography
                        level='body-sm'
                        sx={{ 
                          color: THEME.colors.text.primary,
                          fontWeight: 'bold',
                          mb: 1
                        }}
                      >
                        Key Features:
                      </Typography>
                      <Stack spacing={0.5}>
                        {service.features.map((feature, featureIndex) => (
                          <Typography
                            key={featureIndex}
                            level='body-sm'
                            sx={{ 
                              color: THEME.colors.text.secondary,
                              display: 'flex',
                              alignItems: 'center',
                              '&::before': {
                                content: '"•"',
                                color: THEME.colors.primary.main,
                                fontWeight: 'bold',
                                mr: 1,
                              }
                            }}
                          >
                            {feature}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>
              </HoverCard>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <CenteredBox sx={{ mt: 8 }}>
          <HoverCard
            variant='outlined'
            hoverEffect={false}
            sx={{
              background: `linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(27, 94, 32, 0.05) 100%)`,
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                <GradientText level='h2'>
                  Ready to Get Started?
                </GradientText>
                <Typography
                  level='body-lg'
                  sx={{ color: THEME.colors.text.secondary }}
                >
                  Let's discuss how our research services can help drive your business forward.
                </Typography>
                <FlexBox justify="center" gap={2} wrap>
                  <Button
                    size='lg'
                    sx={{
                      background: THEME.colors.primary.gradient,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${THEME.colors.primary.dark} 0%, ${THEME.colors.primary.main} 100%)`,
                      },
                    }}
                    onClick={navigateToContact}
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant='outlined'
                    size='lg'
                    onClick={navigateToOpinions}
                    sx={{
                      borderColor: THEME.colors.primary.main,
                      color: THEME.colors.primary.main,
                      '&:hover': {
                        borderColor: THEME.colors.primary.dark,
                        backgroundColor: 'rgba(46, 125, 50, 0.1)',
                      },
                    }}
                  >
                    Share Your Opinion
                  </Button>
                </FlexBox>
              </Stack>
            </CardContent>
          </HoverCard>
        </CenteredBox>
      </Container>
    </PageContainer>
  );
};

export default Services;
