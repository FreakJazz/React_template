import type { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from '../../components/router-link';
import { paths } from '../../paths';

interface Section {
  title: string;
  items: {
    external?: boolean;
    title: string;
    path: string;
  }[];
}

export const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50'),
      borderTopColor: 'divider',
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      pb: 6,
      pt: {
        md: 15,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
      >
        <Grid
          xs={12}
          sm={6}
        >
          <Stack spacing={1}>
            <Stack
              alignItems="left"
              direction="column"
              spacing={1}
              sx={{ flexGrow: 1 }}
            >
              <Stack
                alignItems="left"
                component={RouterLink}
                direction="row"
                display="inline-flex"
                href={paths.index}
                spacing={1}
                sx={{ textDecoration: 'none' }}
              >
                <div>
                  <img
                    src={'assets/principal/logo.png'}
                    alt={'logo-principal'}
                    width="64px"
                    height="auto"
                  />
                </div>
                {
                  <Box
                    sx={{
                      color: 'text.primary',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 22,
                      fontWeight: 800,
                      letterSpacing: '0.3px',
                      lineHeight: 2.5,
                      '& span': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    SISTEMA ESTADÍSTICO <span>ELECTORAL</span>
                  </Box>
                }
              </Stack>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              © 2024 SISTEMA ESTADÍSTICO ELECTORAL CNE
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          sx={{
            order: {
              xs: 4,
              md: 1,
            },
          }}
        >
          <Stack
            spacing={2} // Ajusta el valor de 'spacing' según el espacio que desees entre las frases
            alignItems="flex-end" // Alinea el contenido a la derecha
            component={RouterLink}
            direction="column"
            display="inline-flex"
            href={paths.index}
            sx={{ textDecoration: 'none' }}
          >
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Av. 6 de Diciembre N33-122 y Bosmediano
            </Typography>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Quito, Ecuador
            </Typography>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              (593-2) 3815-410 ext: 865-347
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 6 }} />
      <Typography
        color="divider"
        variant="caption"
      >
        Freakjazz
      </Typography>
    </Container>
  </Box>
);
