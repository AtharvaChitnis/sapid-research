import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Container,
  Button,
  Stack,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemContent,
} from '@mui/joy';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

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
              Privacy Policy
            </Typography>
            <Typography level='body-lg' sx={{ color: 'text.secondary' }}>
              Last updated: {new Date().toLocaleDateString()}
            </Typography>
          </Box>

          <Box
            sx={{
              mb: 3,
              p: 2,
              borderRadius: 1,
              bgcolor: 'primary.50',
              border: '1px solid',
              borderColor: 'primary.200',
            }}
          >
            <Typography level='body-sm'>
              This Privacy Policy explains how SAPID Research ("we", "our", or
              "us") collects, uses, and protects your personal information in
              compliance with the General Data Protection Regulation (GDPR) and
              other applicable data protection laws.
            </Typography>
          </Box>

          {/* Introduction */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                1. Introduction
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                SAPID Research is committed to protecting your privacy and
                ensuring the security of your personal data. This Privacy Policy
                describes how we collect, use, process, and protect your
                information when you visit our website or use our services.
              </Typography>
              <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                By using our website, you consent to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our website.
              </Typography>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                2. Information We Collect
              </Typography>

              <Typography level='h4' sx={{ mb: 1, color: 'text.primary' }}>
                2.1 Personal Information
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                We may collect the following personal information:
              </Typography>
              <List>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Name and contact information (email address, phone
                      number)
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Company information and job title
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Communication preferences and feedback
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Information provided through contact forms and surveys
                    </Typography>
                  </ListItemContent>
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />

              <Typography level='h4' sx={{ mb: 1, color: 'text.primary' }}>
                2.2 Automatically Collected Information
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                When you visit our website, we automatically collect:
              </Typography>
              <List>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • IP address and browser information
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Pages visited and time spent on our website
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Device information and operating system
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Cookies and similar tracking technologies (with your
                      consent)
                    </Typography>
                  </ListItemContent>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                3. How We Use Your Information
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                We use your personal information for the following purposes:
              </Typography>
              <List>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • To provide and improve our services
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • To respond to your inquiries and provide customer
                      support
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • To send you relevant information about our services
                      (with your consent)
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • To analyze website usage and improve user experience
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • To comply with legal obligations and protect our rights
                    </Typography>
                  </ListItemContent>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Legal Basis for Processing */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                4. Legal Basis for Processing (GDPR)
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                Under GDPR, we process your personal data based on the following
                legal grounds:
              </Typography>
              <List>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Consent:</strong> When you explicitly agree to
                      the processing of your data
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Legitimate Interest:</strong> To provide and
                      improve our services
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Contract Performance:</strong> To fulfill our
                      obligations to you
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Legal Obligation:</strong> To comply with
                      applicable laws and regulations
                    </Typography>
                  </ListItemContent>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Data Sharing and Third Parties */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                5. Data Sharing and Third Parties
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your explicit consent,
                except in the following circumstances:
              </Typography>
              <List>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Service providers who assist us in operating our website
                      and providing services
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Legal authorities when required by law or to protect our
                      rights
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Business partners with your explicit consent
                    </Typography>
                  </ListItemContent>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                6. Data Security
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. These measures include:
              </Typography>
              <List>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Encryption of data in transit and at rest
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Regular security assessments and updates
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Access controls and authentication measures
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Employee training on data protection practices
                    </Typography>
                  </ListItemContent>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Your Rights (GDPR) */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                7. Your Rights Under GDPR
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                Under GDPR, you have the following rights regarding your
                personal data:
              </Typography>
              <List>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Right to Access:</strong> Request a copy of your
                      personal data
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Right to Rectification:</strong> Request
                      correction of inaccurate data
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Right to Erasure:</strong> Request deletion of
                      your personal data
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Right to Restrict Processing:</strong> Request
                      limitation of data processing
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Right to Data Portability:</strong> Request
                      transfer of your data
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Right to Object:</strong> Object to processing
                      of your data
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • <strong>Right to Withdraw Consent:</strong> Withdraw
                      consent at any time
                    </Typography>
                  </ListItemContent>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                8. Data Retention
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                We retain your personal data only for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law.
                Specifically:
              </Typography>
              <List>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Contact form submissions: 2 years
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Website analytics data: 26 months
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Marketing communications: Until consent withdrawal
                    </Typography>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <Typography
                      level='body-md'
                      sx={{ color: 'text.secondary' }}
                    >
                      • Legal compliance data: As required by applicable laws
                    </Typography>
                  </ListItemContent>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                9. Cookies and Tracking Technologies
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                We use cookies and similar tracking technologies to enhance your
                browsing experience. You can manage your cookie preferences
                through our cookie settings. For more information, please refer
                to our Cookie Policy.
              </Typography>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                10. International Data Transfers
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                Your personal data may be transferred to and processed in
                countries other than your country of residence. We ensure that
                such transfers comply with applicable data protection laws and
                implement appropriate safeguards to protect your data.
              </Typography>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                11. Contact Information
              </Typography>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </Typography>
              <Stack spacing={1}>
                <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                  <strong>Email:</strong> privacy@sapidresearch.com
                </Typography>
                <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                  <strong>Address:</strong> [Your Company Address]
                </Typography>
                <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                  <strong>Phone:</strong> [Your Phone Number]
                </Typography>
              </Stack>
              <Typography
                level='body-md'
                sx={{ color: 'text.secondary', mt: 2 }}
              >
                You also have the right to lodge a complaint with your local
                data protection authority if you believe we have not addressed
                your concerns adequately.
              </Typography>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card>
            <CardContent>
              <Typography level='h3' sx={{ mb: 2, color: 'text.primary' }}>
                12. Changes to This Privacy Policy
              </Typography>
              <Typography level='body-md' sx={{ color: 'text.secondary' }}>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of any material changes by posting the updated policy on our
                website and updating the "Last updated" date.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
