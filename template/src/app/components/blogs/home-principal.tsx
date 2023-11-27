import type { FC } from 'react';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/app/components/router-link';
import { paths } from 'src/app/paths';

export const HomePrincipal: FC = () => {

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px',
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="sm">
          <Typography
            variant="h1"
            sx={{ mb: 2 }}
          >
            This is the main title of&nbsp;
            <Typography
              component="span"
              color="primary.main"
              variant="inherit"
            >
              Your Page
            </Typography>
            , conveying a strong and clear message about what you do.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Craft a compelling summary of the myriad activities you undertake in this section. 
            Seize the opportunity to pique the interest of your readers by artfully showcasing 
            the array of products and services you provide.
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Button
              component={RouterLink}
              href={paths.index}
              startIcon={
                <SvgIcon fontSize="small">
                  <AttachFileRoundedIcon />
                </SvgIcon>
              }
              sx={(theme) =>
                theme.palette.mode === 'dark'
                  ? {
                      backgroundColor: 'neutral.50',
                      color: 'neutral.900',
                      '&:hover': {
                        backgroundColor: 'neutral.200',
                      },
                    }
                  : {
                      backgroundColor: 'neutral.900',
                      color: 'neutral.50',
                      '&:hover': {
                        backgroundColor: 'neutral.700',
                      },
                    }
              }
              variant="contained"
            >
              Ir al link
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
