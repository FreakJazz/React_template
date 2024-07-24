/**
 * @file Slider.tsx
 * @description This component displays a slider image in a responsive Box. It uses Material-UI for styling and Next.js for image handling.
 * @author Jazmin Rodriguez
 */

import React from 'react';
import { Box } from '@mui/material';

/**
 * Slider
 *
 * This component displays a slider image in a responsive Box.
 * It uses Material-UI for styling.
 *
 * @returns {JSX.Element} The rendered component.
 */

export const Slider: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        pt: 'calc(510 / 2250 * 100%)',
        '& img': {
          height: 'auto',
          position: 'absolute',
          top: 0,
          alignSelf: 'auto',
          width: '100%',
          pt: '100px',
          mb: '20%',
        },
      }}
    >
      <img 
        alt="Slider" 
        src={'assets/banner/banner2.png'} />
    </Box>
  );
};
