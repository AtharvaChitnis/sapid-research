import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Stack,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
  Alert,
  Link,
} from '@mui/joy';

interface GDPRFormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  showMarketingConsent?: boolean;
  showAnalyticsConsent?: boolean;
  requiredFields?: string[];
}

const GDPRForm: React.FC<GDPRFormProps> = ({
  onSubmit,
  children,
  title = 'Contact Form',
  description = "Please fill out the form below and we'll get back to you as soon as possible.",
  showMarketingConsent = true,
  showAnalyticsConsent = true,
  requiredFields = [],
}) => {
  const [consents, setConsents] = useState({
    dataProcessing: false,
    marketing: false,
    analytics: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleConsentChange = (consentType: keyof typeof consents) => {
    setConsents((prev) => ({
      ...prev,
      [consentType]: !prev[consentType],
    }));

    // Clear error when user checks the consent
    if (errors[consentType]) {
      setErrors((prev) => ({ ...prev, [consentType]: '' }));
    }
  };

  const validateConsents = () => {
    const newErrors: Record<string, string> = {};

    if (!consents.dataProcessing) {
      newErrors.dataProcessing =
        'You must consent to data processing to submit this form';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (formData: any) => {
    if (!validateConsents()) {
      return;
    }

    // Add consent information to form data
    const dataWithConsents = {
      ...formData,
      consents: {
        dataProcessing: consents.dataProcessing,
        marketing: consents.marketing,
        analytics: consents.analytics,
        timestamp: new Date().toISOString(),
      },
    };

    onSubmit(dataWithConsents);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Stack spacing={3}>
        <Box>
          <Typography level='h3' sx={{ mb: 1, color: 'text.primary' }}>
            {title}
          </Typography>
          <Typography level='body-md' sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Box>

        {/* Form Fields */}
        <Box>{children}</Box>

        {/* GDPR Consent Section */}
        <Box sx={{ mt: 3 }}>
          <Typography level='h4' sx={{ mb: 2, color: 'text.primary' }}>
            Data Processing Consent
          </Typography>

          <Stack spacing={2}>
            {/* Required Data Processing Consent */}
            <FormControl error={!!errors.dataProcessing}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Checkbox
                  checked={consents.dataProcessing}
                  onChange={() => handleConsentChange('dataProcessing')}
                  sx={{ mt: 0.5 }}
                />
                <Box>
                  <FormLabel sx={{ fontWeight: 'normal' }}>
                    I consent to the processing of my personal data *
                  </FormLabel>
                  <Typography
                    level='body-sm'
                    sx={{ color: 'text.secondary', mt: 0.5 }}
                  >
                    By checking this box, you consent to SAPID Research
                    processing your personal data for the purpose of responding
                    to your inquiry and providing our services. This consent is
                    required to submit this form.
                  </Typography>
                  {errors.dataProcessing && (
                    <FormHelperText>{errors.dataProcessing}</FormHelperText>
                  )}
                </Box>
              </Box>
            </FormControl>

            {/* Optional Marketing Consent */}
            {showMarketingConsent && (
              <FormControl>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <Checkbox
                    checked={consents.marketing}
                    onChange={() => handleConsentChange('marketing')}
                    sx={{ mt: 0.5 }}
                  />
                  <Box>
                    <FormLabel sx={{ fontWeight: 'normal' }}>
                      I would like to receive marketing communications
                    </FormLabel>
                    <Typography
                      level='body-sm'
                      sx={{ color: 'text.secondary', mt: 0.5 }}
                    >
                      Receive updates about our services, research insights, and
                      industry news. You can unsubscribe at any time.
                    </Typography>
                  </Box>
                </Box>
              </FormControl>
            )}

            {/* Optional Analytics Consent */}
            {showAnalyticsConsent && (
              <FormControl>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <Checkbox
                    checked={consents.analytics}
                    onChange={() => handleConsentChange('analytics')}
                    sx={{ mt: 0.5 }}
                  />
                  <Box>
                    <FormLabel sx={{ fontWeight: 'normal' }}>
                      I consent to analytics cookies
                    </FormLabel>
                    <Typography
                      level='body-sm'
                      sx={{ color: 'text.secondary', mt: 0.5 }}
                    >
                      Allow us to analyze website usage to improve our services
                      and user experience.
                    </Typography>
                  </Box>
                </Box>
              </FormControl>
            )}
          </Stack>
        </Box>

        {/* Privacy Policy Notice */}
        <Alert severity='info' sx={{ mt: 2 }}>
          <Typography level='body-sm'>
            By submitting this form, you acknowledge that you have read and
            understood our{' '}
            <Link
              href='/privacy-policy'
              sx={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Privacy Policy
            </Link>
            . You have the right to withdraw your consent at any time by
            contacting us at{' '}
            <Link
              href='mailto:privacy@sapidresearch.com'
              sx={{ color: 'inherit', textDecoration: 'underline' }}
            >
              privacy@sapidresearch.com
            </Link>
            .
          </Typography>
        </Alert>

        {/* Data Subject Rights Information */}
        <Box
          sx={{ p: 2, backgroundColor: 'background.level1', borderRadius: 1 }}
        >
          <Typography level='body-sm' sx={{ color: 'text.secondary' }}>
            <strong>Your Rights:</strong> Under GDPR, you have the right to
            access, rectify, erase, and restrict processing of your personal
            data. You also have the right to data portability and to object to
            processing. For more information about your rights, please see our{' '}
            <Link
              href='/privacy-policy'
              sx={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Privacy Policy
            </Link>
            .
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default GDPRForm;
