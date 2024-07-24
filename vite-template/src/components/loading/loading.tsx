import React from 'react';
import Backdrop from '@mui/material/Backdrop';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Backdrop 
        sx={{ 
            color: '#fff', 
            zIndex: (theme) => theme.zIndex.drawer + 1 }} 
            open={isLoading}>
      <img 
        src="/assets/loading/loading.gif" 
        alt="Loading" />
    </Backdrop>
  );
};

export default Loading;
