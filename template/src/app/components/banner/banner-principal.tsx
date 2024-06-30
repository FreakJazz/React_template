import { FC } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface BannerProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const BannerPrincipal: FC<BannerProps> = ({ imageUrl, title, subtitle }) => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      height: '500px',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end', 
      color: 'white',
      paddingRight: '20px', 
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }}
    />
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'right',
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="h6">
        {subtitle}
      </Typography>
    </Box>
  </Box>
);

BannerPrincipal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
