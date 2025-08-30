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
} from '@mui/joy';
import { THEME } from '../constants';

const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
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
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Office Address',
      content: '123 Research Drive\nInnovation District\nCity, State 12345',
    },
    {
      icon: '📧',
      title: 'Email Us',
      content: 'info@sapidresearch.com\nsupport@sapidresearch.com',
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '+1 (555) 123-4567\n+1 (555) 987-6543',
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM',
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
            Contact Us
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
            Get in touch with our research experts and let's discuss how we can help your business grow
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
          {/* Contact Form */}
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
                      Send us a Message
                    </Typography>
                    <Typography
                      level='body-lg'
                      sx={{ color: THEME.colors.text.secondary }}
                    >
                      Fill out the form below and we'll get back to you within 24 hours.
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
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  )}

                  <Box component='form' onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid xs={12} sm={6}>
                        <FormControl error={!!errors.name}>
                          <FormLabel>Full Name *</FormLabel>
                          <Input
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
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
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder='Enter your email address'
                            size='lg'
                          />
                          {errors.email && (
                            <FormHelperText>{errors.email}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                      
                      <Grid xs={12} sm={6}>
                        <FormControl>
                          <FormLabel>Company</FormLabel>
                          <Input
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder='Enter your company name'
                            size='lg'
                          />
                        </FormControl>
                      </Grid>
                      
                      <Grid xs={12} sm={6}>
                        <FormControl>
                          <FormLabel>Phone Number</FormLabel>
                          <Input
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder='Enter your phone number'
                            size='lg'
                          />
                        </FormControl>
                      </Grid>
                      
                      <Grid xs={12}>
                        <FormControl error={!!errors.subject}>
                          <FormLabel>Subject *</FormLabel>
                          <Input
                            value={formData.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            placeholder='What is this regarding?'
                            size='lg'
                          />
                          {errors.subject && (
                            <FormHelperText>{errors.subject}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                      
                      <Grid xs={12}>
                        <FormControl error={!!errors.message}>
                          <FormLabel>Message *</FormLabel>
                          <Textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder='Tell us about your research needs...'
                            minRows={4}
                            size='lg'
                          />
                          {errors.message && (
                            <FormHelperText>{errors.message}</FormHelperText>
                          )}
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
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
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
                Get in Touch
              </Typography>
              
              {contactInfo.map((info, index) => (
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
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography fontSize='2rem'>{info.icon}</Typography>
                        <Typography
                          level='h4'
                          sx={{ color: THEME.colors.text.primary, fontWeight: 'bold' }}
                        >
                          {info.title}
                        </Typography>
                      </Box>
                      <Typography
                        level='body-md'
                        sx={{ 
                          color: THEME.colors.text.secondary,
                          whiteSpace: 'pre-line',
                          lineHeight: 1.6,
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
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
                  Ready to Start Your Research Project?
                </Typography>
                <Typography
                  level='body-lg'
                  sx={{ color: THEME.colors.text.secondary }}
                >
                  Schedule a consultation with our research experts to discuss your specific needs and objectives.
                </Typography>
                <Button
                  size='lg'
                  variant='outlined'
                  onClick={() => navigate('/opinions')}
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
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
