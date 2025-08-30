import React from 'react';
import { Box, BoxProps } from '@mui/joy';
import { THEME } from '../../constants';

interface PageContainerProps extends BoxProps {
  children: React.ReactNode;
  background?: 'gradient' | 'default' | 'paper';
  minHeight?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  background = 'default',
  minHeight = '100vh',
  padding = 'lg',
  sx = {},
  ...props
}) => {
  const backgroundMap = {
    gradient: THEME.colors.background.gradient,
    default: THEME.colors.background.default,
    paper: THEME.colors.background.paper,
  };

  const paddingMap = {
    sm: THEME.spacing.section.vertical.sm,
    md: THEME.spacing.section.vertical.md,
    lg: THEME.spacing.section.vertical.lg,
  };

  return (
    <Box
      {...props}
      sx={{
        minHeight,
        background: backgroundMap[background],
        py: paddingMap[padding],
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
