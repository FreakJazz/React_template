/**
 * @file Loading.tsx
 * @description This component displays a loading backdrop with a loading animation. It uses Material-UI for styling and handling the backdrop.
 * @author Jazmin Rodriguez
 */

import React, { FC } from 'react';
import { Backdrop } from '@mui/material';

/**
 * Loading
 *
 * This component displays a loading backdrop with a loading animation.
 * It uses Material-UI for styling and handling the backdrop.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isLoading - Determines if the backdrop should be open.
 * @returns {JSX.Element} The rendered component.
 */

interface LoadingProps {
  isLoading: boolean;
}

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Backdrop  
        sx={{ color: '#FFFFFF', 
        zIndex: (theme) => theme.zIndex.drawer + 1 }} 
        open ={isLoading}>
      <img  
        src="/assets/loading.gif" 
        alt="Loading" />
    </Backdrop>
  );
};

export default Loading;
