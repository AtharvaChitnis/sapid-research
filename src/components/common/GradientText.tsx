import React from 'react';
import { Typography, TypographyProps } from '@mui/joy';
import { THEME } from '../../constants';

interface GradientTextProps extends Omit<TypographyProps, 'sx'> {
  gradient?: string;
  children: React.ReactNode;
  sx?: any;
}

export const GradientText: React.FC<GradientTextProps> = ({
  gradient = THEME.colors.primary.gradient,
  children,
  sx = {},
  ...props
}) => {
  return (
    <Typography
      {...props}
      sx={{
        background: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
