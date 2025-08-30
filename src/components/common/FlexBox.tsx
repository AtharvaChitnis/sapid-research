import React from 'react';
import { Box, BoxProps } from '@mui/joy';

interface FlexBoxProps extends BoxProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  gap?: number;
  wrap?: boolean;
}

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  direction = 'row',
  align = 'center',
  justify = 'flex-start',
  gap = 0,
  wrap = false,
  sx = {},
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
