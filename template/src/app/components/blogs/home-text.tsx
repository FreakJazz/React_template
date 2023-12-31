import type { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const HomeText: FC = () => (
  <Box
    sx={{
      backgroundColor: 'neutral.800',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundImage: 'url("/assets/gradient-bg.svg")',
      color: 'neutral.100',
      py: '120px',
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Typography
          align="center"
          color="inherit"
          variant="h3"
        >
          We have helped in!
        </Typography>
        <Typography
          align="center"
          color="inherit"
          variant="subtitle2"
        >
          In this section, you can input relevant company data and navigate to a specific 
          section based on what you want to showcase about your company.
        </Typography>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Button
          component="a"
          href="https://www.google.com/"
          target="_blank"
          variant="contained"
        >
          Go now
        </Button>
      </Stack>
    </Container>
  </Box>
);
