import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link as JoyLink,
  Divider,
} from '@mui/joy';
// import { THEME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: 'background.level1',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth='lg'>
        <Stack spacing={3}>
          {/* Main Footer Content */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent='space-between'
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            {/* Company Info */}
            <Box>
              <Typography level='h4' sx={{ mb: 1, color: 'text.primary' }}>
                SAPID Research
              </Typography>
              <Typography
                level='body-sm'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                Transforming data into actionable insights for business growth
              </Typography>
              <Typography level='body-sm' sx={{ color: 'text.secondary' }}>
                © {currentYear} SAPID Research. All rights reserved.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Stack direction='row' spacing={4}>
              <Stack spacing={1}>
                <Typography
                  level='body-sm'
                  sx={{ fontWeight: 'bold', color: 'text.primary' }}
                >
                  Company
                </Typography>
                <JoyLink
                  component={Link}
                  to='/about'
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  About Us
                </JoyLink>
                <JoyLink
                  component={Link}
                  to='/services'
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Services
                </JoyLink>
                <JoyLink
                  component={Link}
                  to='/contact'
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Contact
                </JoyLink>
              </Stack>

              <Stack spacing={1}>
                <Typography
                  level='body-sm'
                  sx={{ fontWeight: 'bold', color: 'text.primary' }}
                >
                  Resources
                </Typography>
                <JoyLink
                  component={Link}
                  to='/blog'
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Blog
                </JoyLink>
                <JoyLink
                  component={Link}
                  to='/opinions'
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Opinions
                </JoyLink>
              </Stack>

              <Stack spacing={1}>
                <Typography
                  level='body-sm'
                  sx={{ fontWeight: 'bold', color: 'text.primary' }}
                >
                  Legal & Privacy
                </Typography>
                <JoyLink
                  component={Link}
                  to='/privacy-policy'
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Privacy Policy
                </JoyLink>
                <JoyLink
                  component={Link}
                  to='/data-rights'
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Data Rights
                </JoyLink>
                <JoyLink
                  href='mailto:privacy@sapidresearch.com'
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Privacy Contact
                </JoyLink>
              </Stack>
            </Stack>
          </Stack>

          <Divider />

          {/* GDPR Compliance Notice */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography level='body-xs' sx={{ color: 'text.secondary' }}>
              This website is GDPR compliant. We respect your privacy and are
              committed to protecting your personal data. For more information
              about how we handle your data, please read our{' '}
              <JoyLink
                component={Link}
                to='/privacy-policy'
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'underline',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                Privacy Policy
              </JoyLink>
              . To exercise your data subject rights, visit our{' '}
              <JoyLink
                component={Link}
                to='/data-rights'
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'underline',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                Data Rights page
              </JoyLink>
              .
            </Typography>
          </Box>

          {/* Contact Information */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography level='body-xs' sx={{ color: 'text.secondary' }}>
              Contact us: info@sapidresearch.com | Privacy:
              privacy@sapidresearch.com | Address: 123 Research Drive,
              Innovation District, City, State 12345
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
