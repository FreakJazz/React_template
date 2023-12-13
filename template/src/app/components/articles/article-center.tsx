import type { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const ArticleCenter: FC = () => {

  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 2
        }}
    >
      <Container maxWidth="lg">
        <Box  sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: 'lg',
          }}>
          <Typography
            variant="h1"
            sx={{ 
                mb: 2,
                justifyContent: 'center',
                alignItems: 'center', 
            }}
          >
            Title for the article
          </Typography>
          <Box
            sx={{
              overflow: 'hidden',
              width: '90%',
              fontSize: 0,
              py: 2,
              px: 2,
              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '100%',
              },
            }}
          >
            <img src='/assets/article-images/gallery-6.jpg' />
          </Box>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            General data for the article Craft a compelling summary of the myriad activities you undertake in this section. 
            Seize the opportunity to pique the interest of your readers by artfully showcasing 
            the array of products and services you provide.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
