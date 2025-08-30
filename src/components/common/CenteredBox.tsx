import React from 'react';
import { Box, BoxProps } from '@mui/joy';

interface CenteredBoxProps extends BoxProps {
  children: React.ReactNode;
  vertical?: boolean;
  horizontal?: boolean;
}

export const CenteredBox: React.FC<CenteredBoxProps> = ({
  children,
  vertical = false,
  horizontal = true,
  sx = {},
  ...props
}) => {
  const centerStyles = {
    ...(horizontal && { textAlign: 'center' as const }),
    ...(vertical && { 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
  };

  return (
    <Box
      {...props}
      sx={{
        ...centerStyles,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
