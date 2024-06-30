import { FC } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SliderContentProps {
  title: string;
  urlImage: string;
  description: string;
  id: string;
}

export const SliderContent: FC<SliderContentProps> = ({ title, urlImage, description }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: 2,
    }}
  >
    <img src={urlImage} alt={title} style={{ width: '50%' }} />
    <Typography variant="h6" sx={{ mt: 2 }}>{title}</Typography>
    <Typography variant="body1" sx={{ mt: 1 }}>{description}</Typography>
  </Box>
);

SliderContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
