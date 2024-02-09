import type { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const ArticleLeft: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: 'lg',
          }}
        >
          <Box
            sx={{
              width: '48%', 
              pr: 2,
            }}
          >
            <Typography variant="h1" sx={{ mb: 2 }}>
              Title for the left article 
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              General data for the article Craft a compelling summary of the myriad activities you undertake in this section.
              Seize the opportunity to pique the interest of your readers by artfully showcasing the array of products and services you provide.
            </Typography>
          </Box>
          <Box
            sx={{
              width: '48%', // Ajustar según sea necesario
              overflow: 'hidden',
              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '50%',
              },                                                            
            }}
          >
            <img src='/assets/article-images/gallery-4.jpg' alt="Article Image" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};