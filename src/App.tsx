import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from './components/Main';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Opinions from './components/Opinions';
import PrivacyPolicy from './components/PrivacyPolicy';
import DataSubjectRights from './components/DataSubjectRights';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { THEME } from './constants';
import { theme } from './theme';
import { useAppHeadTags } from './hooks/useAppHeadTags';

function App() {
  useAppHeadTags();

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TransitionGroup>
          <CSSTransition
            timeout={THEME.transitions.duration.medium}
            classNames='page'
          >
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/main' element={<Main />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/services' element={<Services />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/opinions' element={<Opinions />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/data-rights' element={<DataSubjectRights />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
        <CookieConsent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
