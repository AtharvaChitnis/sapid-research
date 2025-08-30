import React, { useState } from 'react';
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
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  Alert,
  Select,
  Option,
} from '@mui/joy';
import { THEME } from '../constants';

const Opinions: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    occupation: '',
    researchTopic: '',
    opinion: '',
    experience: '',
    suggestions: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleBackToHome = () => {
    navigate('/');
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.age) {
      newErrors.age = 'Age group is required';
    }

    if (!formData.occupation.trim()) {
      newErrors.occupation = 'Occupation is required';
    }

    if (!formData.researchTopic.trim()) {
      newErrors.researchTopic = 'Research topic is required';
    }

    if (!formData.opinion.trim()) {
      newErrors.opinion = 'Your opinion is required';
    } else if (formData.opinion.length < 20) {
      newErrors.opinion =
        'Please provide a more detailed opinion (at least 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        age: '',
        occupation: '',
        researchTopic: '',
        opinion: '',
        experience: '',
        suggestions: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const researchTopics = [
    'Consumer Behavior',
    'Market Trends',
    'Product Preferences',
    'Brand Perception',
    'Technology Adoption',
    'Sustainability',
    'Digital Marketing',
    'E-commerce',
    'Social Media',
    'Other (please specify)',
  ];

  const ageGroups = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];

  const benefits = [
    {
      icon: '🎯',
      title: 'Shape Research',
      description:
        'Your opinions directly influence our research methodologies and focus areas.',
    },
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      description:
        'Help create more accurate and relevant market research data.',
    },
    {
      icon: '🤝',
      title: 'Community Impact',
      description:
        'Contribute to research that benefits businesses and consumers alike.',
    },
    {
      icon: '📈',
      title: 'Stay Informed',
      description: 'Get updates on research findings and market trends.',
    },
  ];

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
            Share Your Opinion
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
            Contribute to our research and help shape the future of market
            insights
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

        <Grid container spacing={4}>
          {/* Benefits Section */}
          <Grid xs={12} lg={4}>
            <Stack spacing={3}>
              <Typography
                level='h3'
                sx={{
                  background: THEME.colors.primary.gradient,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 2,
                }}
              >
                Why Share Your Opinion?
              </Typography>

              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  variant='outlined'
                  sx={{
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
                    <Stack spacing={2}>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                      >
                        <Typography fontSize='2rem'>{benefit.icon}</Typography>
                        <Typography
                          level='h4'
                          sx={{
                            color: THEME.colors.text.primary,
                            fontWeight: 'bold',
                          }}
                        >
                          {benefit.title}
                        </Typography>
                      </Box>
                      <Typography
                        level='body-md'
                        sx={{
                          color: THEME.colors.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Opinion Form */}
          <Grid xs={12} lg={8}>
            <Card
              variant='outlined'
              sx={{
                borderRadius: THEME.borderRadius.lg,
                boxShadow: THEME.shadows.sm,
              }}
            >
              <CardContent>
                <Stack spacing={4}>
                  <Box>
                    <Typography
                      level='h2'
                      sx={{
                        background: THEME.colors.primary.gradient,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        mb: 2,
                      }}
                    >
                      Contribute to Research
                    </Typography>
                    <Typography
                      level='body-lg'
                      sx={{ color: THEME.colors.text.secondary }}
                    >
                      Your insights help us create more accurate and relevant
                      market research. Share your thoughts and experiences
                      below.
                    </Typography>
                  </Box>

                  {submitSuccess && (
                    <Alert
                      color='success'
                      variant='soft'
                      sx={{
                        borderRadius: THEME.borderRadius.md,
                      }}
                    >
                      Thank you for sharing your opinion! Your contribution will
                      help improve our research quality.
                    </Alert>
                  )}

                  <Box component='form' onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid xs={12} sm={6}>
                        <FormControl error={!!errors.name}>
                          <FormLabel>Full Name *</FormLabel>
                          <Input
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange('name', e.target.value)
                            }
                            placeholder='Enter your full name'
                            size='lg'
                          />
                          {errors.name && (
                            <FormHelperText>{errors.name}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>

                      <Grid xs={12} sm={6}>
                        <FormControl error={!!errors.email}>
                          <FormLabel>Email Address *</FormLabel>
                          <Input
                            type='email'
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange('email', e.target.value)
                            }
                            placeholder='Enter your email address'
                            size='lg'
                          />
                          {errors.email && (
                            <FormHelperText>{errors.email}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>

                      <Grid xs={12} sm={6}>
                        <FormControl error={!!errors.age}>
                          <FormLabel>Age Group *</FormLabel>
                          <Select
                            value={formData.age}
                            onChange={(_, value) =>
                              handleInputChange('age', value || '')
                            }
                            placeholder='Select your age group'
                            size='lg'
                          >
                            {ageGroups.map((age) => (
                              <Option key={age} value={age}>
                                {age}
                              </Option>
                            ))}
                          </Select>
                          {errors.age && (
                            <FormHelperText>{errors.age}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>

                      <Grid xs={12} sm={6}>
                        <FormControl error={!!errors.occupation}>
                          <FormLabel>Occupation *</FormLabel>
                          <Input
                            value={formData.occupation}
                            onChange={(e) =>
                              handleInputChange('occupation', e.target.value)
                            }
                            placeholder='Enter your occupation'
                            size='lg'
                          />
                          {errors.occupation && (
                            <FormHelperText>{errors.occupation}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>

                      <Grid xs={12}>
                        <FormControl error={!!errors.researchTopic}>
                          <FormLabel>Research Topic of Interest *</FormLabel>
                          <Select
                            value={formData.researchTopic}
                            onChange={(_, value) =>
                              handleInputChange('researchTopic', value || '')
                            }
                            placeholder='Select a research topic'
                            size='lg'
                          >
                            {researchTopics.map((topic) => (
                              <Option key={topic} value={topic}>
                                {topic}
                              </Option>
                            ))}
                          </Select>
                          {errors.researchTopic && (
                            <FormHelperText>
                              {errors.researchTopic}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>

                      <Grid xs={12}>
                        <FormControl error={!!errors.opinion}>
                          <FormLabel>Your Opinion *</FormLabel>
                          <Textarea
                            value={formData.opinion}
                            onChange={(e) =>
                              handleInputChange('opinion', e.target.value)
                            }
                            placeholder='Share your thoughts, experiences, or insights on the selected topic...'
                            minRows={4}
                            size='lg'
                          />
                          {errors.opinion && (
                            <FormHelperText>{errors.opinion}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>

                      <Grid xs={12}>
                        <FormControl>
                          <FormLabel>Relevant Experience (Optional)</FormLabel>
                          <Textarea
                            value={formData.experience}
                            onChange={(e) =>
                              handleInputChange('experience', e.target.value)
                            }
                            placeholder='Share any relevant experiences or background that might be helpful...'
                            minRows={3}
                            size='lg'
                          />
                        </FormControl>
                      </Grid>

                      <Grid xs={12}>
                        <FormControl>
                          <FormLabel>
                            Suggestions for Future Research (Optional)
                          </FormLabel>
                          <Textarea
                            value={formData.suggestions}
                            onChange={(e) =>
                              handleInputChange('suggestions', e.target.value)
                            }
                            placeholder='What topics or areas would you like to see researched in the future?'
                            minRows={3}
                            size='lg'
                          />
                        </FormControl>
                      </Grid>

                      <Grid xs={12}>
                        <Button
                          type='submit'
                          size='lg'
                          loading={isSubmitting}
                          sx={{
                            background: THEME.colors.primary.gradient,
                            '&:hover': {
                              background: `linear-gradient(135deg, ${THEME.colors.primary.dark} 0%, ${THEME.colors.primary.main} 100%)`,
                            },
                          }}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Opinion'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Info */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Card
            variant='outlined'
            sx={{
              borderRadius: THEME.borderRadius.lg,
              boxShadow: THEME.shadows.sm,
              background: `linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(27, 94, 32, 0.05) 100%)`,
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                <Typography
                  level='h2'
                  sx={{
                    background: THEME.colors.primary.gradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Your Voice Matters
                </Typography>
                <Typography
                  level='body-lg'
                  sx={{ color: THEME.colors.text.secondary }}
                >
                  Every opinion contributes to better research outcomes. Thank
                  you for helping us understand the market better.
                </Typography>
                <Button
                  size='lg'
                  variant='outlined'
                  onClick={() => navigate('/contact')}
                  sx={{
                    borderColor: THEME.colors.primary.main,
                    color: THEME.colors.primary.main,
                    '&:hover': {
                      borderColor: THEME.colors.primary.dark,
                      backgroundColor: 'rgba(46, 125, 50, 0.1)',
                    },
                  }}
                >
                  Contact Us for More Info
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Opinions;
