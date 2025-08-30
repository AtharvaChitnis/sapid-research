import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  ModalDialog,
  ModalClose,
  Stack,
  Switch,
  FormLabel,
  Divider,
  Container,
} from '@mui/joy';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Always true
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(allRejected);
    localStorage.setItem('cookie-consent', JSON.stringify(allRejected));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowSettings(false);
    setShowBanner(false);
  };

  const handlePreferenceChange = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return; // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'background.surface',
            borderTop: '1px solid',
            borderColor: 'divider',
            p: 3,
            zIndex: 9999,
            boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Container maxWidth='lg'>
            <Stack spacing={2}>
              <Typography level='h4' sx={{ color: 'text.primary' }}>
                Cookie Consent
              </Typography>
              <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                We use cookies to enhance your browsing experience, serve
                personalized content, and analyze our traffic. By clicking
                "Accept All", you consent to our use of cookies. You can
                customize your preferences in our cookie settings.
              </Typography>
              <Stack
                direction='row'
                spacing={2}
                sx={{ flexWrap: 'wrap', gap: 1 }}
              >
                <Button
                  variant='outlined'
                  onClick={() => setShowSettings(true)}
                  sx={{ minWidth: 120 }}
                >
                  Cookie Settings
                </Button>
                <Button
                  variant='outlined'
                  color='neutral'
                  onClick={handleRejectAll}
                  sx={{ minWidth: 120 }}
                >
                  Reject All
                </Button>
                <Button onClick={handleAcceptAll} sx={{ minWidth: 120 }}>
                  Accept All
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
      )}

      {/* Cookie Settings Modal */}
      <Modal open={showSettings} onClose={() => setShowSettings(false)}>
        <ModalDialog size='lg' sx={{ maxWidth: 600 }}>
          <ModalClose />
          <Typography level='h3' component='h2' sx={{ mb: 2 }}>
            Cookie Settings
          </Typography>

          <Stack spacing={3}>
            <Typography level='body-md' sx={{ color: 'text.secondary' }}>
              Manage your cookie preferences. You can change these settings at
              any time.
            </Typography>

            <Divider />

            {/* Necessary Cookies */}
            <Box>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Box>
                  <FormLabel sx={{ fontWeight: 'bold' }}>
                    Necessary Cookies
                  </FormLabel>
                  <Typography
                    level='body-sm'
                    sx={{ color: 'text.secondary', mt: 0.5 }}
                  >
                    These cookies are essential for the website to function
                    properly. They cannot be disabled.
                  </Typography>
                </Box>
                <Switch checked={preferences.necessary} disabled />
              </Stack>
            </Box>

            <Divider />

            {/* Analytics Cookies */}
            <Box>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Box>
                  <FormLabel sx={{ fontWeight: 'bold' }}>
                    Analytics Cookies
                  </FormLabel>
                  <Typography
                    level='body-sm'
                    sx={{ color: 'text.secondary', mt: 0.5 }}
                  >
                    Help us understand how visitors interact with our website by
                    collecting and reporting information anonymously.
                  </Typography>
                </Box>
                <Switch
                  checked={preferences.analytics}
                  onChange={() => handlePreferenceChange('analytics')}
                />
              </Stack>
            </Box>

            <Divider />

            {/* Marketing Cookies */}
            <Box>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Box>
                  <FormLabel sx={{ fontWeight: 'bold' }}>
                    Marketing Cookies
                  </FormLabel>
                  <Typography
                    level='body-sm'
                    sx={{ color: 'text.secondary', mt: 0.5 }}
                  >
                    Used to track visitors across websites to display relevant
                    and engaging advertisements.
                  </Typography>
                </Box>
                <Switch
                  checked={preferences.marketing}
                  onChange={() => handlePreferenceChange('marketing')}
                />
              </Stack>
            </Box>

            <Divider />

            {/* Preferences Cookies */}
            <Box>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Box>
                  <FormLabel sx={{ fontWeight: 'bold' }}>
                    Preference Cookies
                  </FormLabel>
                  <Typography
                    level='body-sm'
                    sx={{ color: 'text.secondary', mt: 0.5 }}
                  >
                    Allow the website to remember information that changes the
                    way it behaves or looks.
                  </Typography>
                </Box>
                <Switch
                  checked={preferences.preferences}
                  onChange={() => handlePreferenceChange('preferences')}
                />
              </Stack>
            </Box>

            <Divider />

            <Box
              sx={{
                mt: 2,
                p: 2,
                borderRadius: 1,
                bgcolor: 'primary.50',
                border: '1px solid',
                borderColor: 'primary.200',
              }}
            >
              <Typography level='body-sm'>
                For more information about how we use cookies and your data,
                please read our{' '}
                <a
                  href='/privacy-policy'
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                >
                  Privacy Policy
                </a>
                .
              </Typography>
            </Box>

            <Stack
              direction='row'
              spacing={2}
              sx={{ justifyContent: 'flex-end' }}
            >
              <Button variant='outlined' onClick={() => setShowSettings(false)}>
                Cancel
              </Button>
              <Button onClick={handleSavePreferences}>Save Preferences</Button>
            </Stack>
          </Stack>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default CookieConsent;
