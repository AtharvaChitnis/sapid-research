import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Container,
  Button,
  Stack,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Option,
  RadioGroup,
  Radio,
  Checkbox,
  Alert,
  Divider,
} from '@mui/joy';
import { THEME } from '../constants';

interface RightsRequest {
  requestType: string;
  name: string;
  email: string;
  phone?: string;
  description: string;
  dataCategories: string[];
  additionalInfo: string;
  verificationMethod: string;
  urgency: string;
}

const DataSubjectRights: React.FC = () => {
  const navigate = useNavigate();
  const [request, setRequest] = useState<RightsRequest>({
    requestType: '',
    name: '',
    email: '',
    phone: '',
    description: '',
    dataCategories: [],
    additionalInfo: '',
    verificationMethod: 'email',
    urgency: 'normal',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleInputChange = (
    field: keyof RightsRequest,
    value: string | string[]
  ) => {
    setRequest((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleDataCategoryChange = (category: string) => {
    const updatedCategories = request.dataCategories.includes(category)
      ? request.dataCategories.filter((c) => c !== category)
      : [...request.dataCategories, category];
    handleInputChange('dataCategories', updatedCategories);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!request.requestType) {
      newErrors.requestType = 'Please select a request type';
    }

    if (!request.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!request.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(request.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!request.description.trim()) {
      newErrors.description = 'Please describe your request';
    }

    if (request.dataCategories.length === 0) {
      newErrors.dataCategories = 'Please select at least one data category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setRequest({
          requestType: '',
          name: '',
          email: '',
          phone: '',
          description: '',
          dataCategories: [],
          additionalInfo: '',
          verificationMethod: 'email',
          urgency: 'normal',
        });
      }, 5000);
    }, 2000);
  };

  const requestTypes = [
    {
      value: 'access',
      label: 'Right to Access',
      description: 'Request a copy of your personal data',
    },
    {
      value: 'rectification',
      label: 'Right to Rectification',
      description: 'Correct inaccurate personal data',
    },
    {
      value: 'erasure',
      label: 'Right to Erasure',
      description: 'Delete your personal data',
    },
    {
      value: 'restriction',
      label: 'Right to Restrict Processing',
      description: 'Limit how we process your data',
    },
    {
      value: 'portability',
      label: 'Right to Data Portability',
      description: 'Receive your data in a portable format',
    },
    {
      value: 'objection',
      label: 'Right to Object',
      description: 'Object to processing of your data',
    },
    {
      value: 'withdraw',
      label: 'Withdraw Consent',
      description: 'Withdraw previously given consent',
    },
  ];

  const dataCategories = [
    'Personal Information (name, email, phone)',
    'Contact Form Submissions',
    'Website Usage Data',
    'Marketing Communications',
    'Survey Responses',
    'Customer Service Records',
    'Analytics Data',
    'Other (please specify)',
  ];

  return (
    <Box
      sx={{ py: 4, minHeight: '100vh', backgroundColor: 'background.level1' }}
    >
      <Container maxWidth='lg'>
        <Stack spacing={4}>
          {/* Header */}
          <Box>
            <Button
              variant='outlined'
              onClick={handleBackToHome}
              sx={{ mb: 3 }}
            >
              ← Back to Home
            </Button>
            <Typography level='h1' sx={{ mb: 2, color: 'text.primary' }}>
              Data Subject Rights Request
            </Typography>
            <Typography level='body-lg' sx={{ color: 'text.secondary' }}>
              Exercise your GDPR rights regarding your personal data
            </Typography>
          </Box>

          <Alert severity='info' sx={{ mb: 3 }}>
            <Typography level='body-sm'>
              Under GDPR, you have several rights regarding your personal data.
              This form allows you to exercise these rights. We will respond to
              your request within 30 days as required by law.
            </Typography>
          </Alert>

          {submitSuccess ? (
            <Card>
              <CardContent>
                <Alert severity='success' sx={{ mb: 2 }}>
                  <Typography level='h4' sx={{ mb: 1 }}>
                    Request Submitted Successfully
                  </Typography>
                  <Typography level='body-md'>
                    Thank you for your data subject rights request. We have
                    received your request and will process it within 30 days as
                    required by GDPR. You will receive a confirmation email
                    shortly with further instructions.
                  </Typography>
                </Alert>
                <Typography level='body-sm' sx={{ color: 'text.secondary' }}>
                  <strong>Reference Number:</strong> DSR-
                  {Date.now().toString().slice(-6)}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <Box component='form' onSubmit={handleSubmit}>
                  <Stack spacing={4}>
                    {/* Request Type */}
                    <FormControl error={!!errors.requestType}>
                      <FormLabel>Type of Request *</FormLabel>
                      <RadioGroup
                        value={request.requestType}
                        onChange={(e) =>
                          handleInputChange('requestType', e.target.value)
                        }
                      >
                        {requestTypes.map((type) => (
                          <Box key={type.value} sx={{ mb: 2 }}>
                            <Radio
                              value={type.value}
                              label={
                                <Box>
                                  <Typography
                                    level='body-md'
                                    sx={{ fontWeight: 'bold' }}
                                  >
                                    {type.label}
                                  </Typography>
                                  <Typography
                                    level='body-sm'
                                    sx={{ color: 'text.secondary' }}
                                  >
                                    {type.description}
                                  </Typography>
                                </Box>
                              }
                            />
                          </Box>
                        ))}
                      </RadioGroup>
                      {errors.requestType && (
                        <Typography
                          level='body-sm'
                          sx={{ color: 'danger.500', mt: 1 }}
                        >
                          {errors.requestType}
                        </Typography>
                      )}
                    </FormControl>

                    <Divider />

                    {/* Personal Information */}
                    <Typography level='h4' sx={{ color: 'text.primary' }}>
                      Your Information
                    </Typography>

                    <Stack direction='row' spacing={2}>
                      <FormControl error={!!errors.name} sx={{ flex: 1 }}>
                        <FormLabel>Full Name *</FormLabel>
                        <Input
                          value={request.name}
                          onChange={(e) =>
                            handleInputChange('name', e.target.value)
                          }
                          placeholder='Enter your full name'
                        />
                        {errors.name && (
                          <Typography
                            level='body-sm'
                            sx={{ color: 'danger.500', mt: 1 }}
                          >
                            {errors.name}
                          </Typography>
                        )}
                      </FormControl>

                      <FormControl error={!!errors.email} sx={{ flex: 1 }}>
                        <FormLabel>Email Address *</FormLabel>
                        <Input
                          type='email'
                          value={request.email}
                          onChange={(e) =>
                            handleInputChange('email', e.target.value)
                          }
                          placeholder='Enter your email address'
                        />
                        {errors.email && (
                          <Typography
                            level='body-sm'
                            sx={{ color: 'danger.500', mt: 1 }}
                          >
                            {errors.email}
                          </Typography>
                        )}
                      </FormControl>
                    </Stack>

                    <FormControl>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <Input
                        value={request.phone}
                        onChange={(e) =>
                          handleInputChange('phone', e.target.value)
                        }
                        placeholder='Enter your phone number'
                      />
                    </FormControl>

                    <Divider />

                    {/* Data Categories */}
                    <FormControl error={!!errors.dataCategories}>
                      <FormLabel>Data Categories *</FormLabel>
                      <Typography
                        level='body-sm'
                        sx={{ color: 'text.secondary', mb: 2 }}
                      >
                        Please select the categories of personal data your
                        request relates to:
                      </Typography>
                      <Stack spacing={1}>
                        {dataCategories.map((category) => (
                          <Box key={category}>
                            <Checkbox
                              checked={request.dataCategories.includes(
                                category
                              )}
                              onChange={() =>
                                handleDataCategoryChange(category)
                              }
                              label={category}
                            />
                          </Box>
                        ))}
                      </Stack>
                      {errors.dataCategories && (
                        <Typography
                          level='body-sm'
                          sx={{ color: 'danger.500', mt: 1 }}
                        >
                          {errors.dataCategories}
                        </Typography>
                      )}
                    </FormControl>

                    <Divider />

                    {/* Request Description */}
                    <FormControl error={!!errors.description}>
                      <FormLabel>Description of Your Request *</FormLabel>
                      <Textarea
                        value={request.description}
                        onChange={(e) =>
                          handleInputChange('description', e.target.value)
                        }
                        placeholder="Please provide details about your request, including any specific information you're looking for or changes you'd like made..."
                        minRows={4}
                      />
                      {errors.description && (
                        <Typography
                          level='body-sm'
                          sx={{ color: 'danger.500', mt: 1 }}
                        >
                          {errors.description}
                        </Typography>
                      )}
                    </FormControl>

                    <FormControl>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <Textarea
                        value={request.additionalInfo}
                        onChange={(e) =>
                          handleInputChange('additionalInfo', e.target.value)
                        }
                        placeholder='Any additional information that might help us process your request...'
                        minRows={3}
                      />
                    </FormControl>

                    <Divider />

                    {/* Verification and Urgency */}
                    <Stack direction='row' spacing={2}>
                      <FormControl sx={{ flex: 1 }}>
                        <FormLabel>Preferred Verification Method</FormLabel>
                        <Select
                          value={request.verificationMethod}
                          onChange={(e, value) =>
                            handleInputChange(
                              'verificationMethod',
                              value || 'email'
                            )
                          }
                        >
                          <Option value='email'>Email Verification</Option>
                          <Option value='phone'>Phone Verification</Option>
                          <Option value='postal'>
                            Postal Mail Verification
                          </Option>
                        </Select>
                      </FormControl>

                      <FormControl sx={{ flex: 1 }}>
                        <FormLabel>Urgency Level</FormLabel>
                        <Select
                          value={request.urgency}
                          onChange={(e, value) =>
                            handleInputChange('urgency', value || 'normal')
                          }
                        >
                          <Option value='low'>Low Priority</Option>
                          <Option value='normal'>Normal Priority</Option>
                          <Option value='high'>High Priority</Option>
                          <Option value='urgent'>Urgent</Option>
                        </Select>
                      </FormControl>
                    </Stack>

                    <Divider />

                    {/* Submit Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                        type='submit'
                        loading={isSubmitting}
                        sx={{ minWidth: 200 }}
                      >
                        {isSubmitting
                          ? 'Submitting Request...'
                          : 'Submit Request'}
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          )}

          {/* Information Cards */}
          <Stack direction='row' spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
            <Card sx={{ flex: 1, minWidth: 300 }}>
              <CardContent>
                <Typography level='h4' sx={{ mb: 1, color: 'text.primary' }}>
                  Response Time
                </Typography>
                <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                  We will respond to your request within 30 days as required by
                  GDPR. For complex requests, we may extend this period by up to
                  2 months.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1, minWidth: 300 }}>
              <CardContent>
                <Typography level='h4' sx={{ mb: 1, color: 'text.primary' }}>
                  Verification
                </Typography>
                <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                  We may need to verify your identity before processing your
                  request. This helps protect your personal data from
                  unauthorized access.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1, minWidth: 300 }}>
              <CardContent>
                <Typography level='h4' sx={{ mb: 1, color: 'text.primary' }}>
                  Contact Information
                </Typography>
                <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                  For questions about this form or your data subject rights,
                  contact us at{' '}
                  <a
                    href='mailto:privacy@sapidresearch.com'
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                  >
                    privacy@sapidresearch.com
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default DataSubjectRights;
