import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from './components/Main';
import LandingPage from './components/LandingPage';
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
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
