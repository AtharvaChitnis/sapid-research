import React from 'react';
import { Card, CardProps } from '@mui/joy';
import { THEME } from '../../constants';

interface HoverCardProps extends CardProps {
  children: React.ReactNode;
  hoverEffect?: boolean;
  elevation?: 'sm' | 'md' | 'lg';
}

export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  hoverEffect = true,
  elevation = 'sm',
  sx = {},
  ...props
}) => {
  const shadowMap = {
    sm: THEME.shadows.sm,
    md: THEME.shadows.md,
    lg: THEME.shadows.lg,
  };

  return (
    <Card
      {...props}
      sx={{
        borderRadius: THEME.borderRadius.lg,
        boxShadow: shadowMap[elevation],
        transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
        ...(hoverEffect && {
          '&:hover': {
            boxShadow: THEME.shadows.lg,
            transform: 'translateY(-8px)',
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};
