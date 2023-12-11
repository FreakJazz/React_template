'use client';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { LogoAtt } from 'src/app/components/logos/logo-att';
import { LogoAws } from 'src/app/components/logos/logo-aws';
import { LogoBolt } from 'src/app/components/logos/logo-bolt';
import { LogoSamsung } from 'src/app/components/logos/logo-samsung';
import { LogoVisma } from 'src/app/components/logos/logo-visma';
import { RouterLink } from 'src/app/components/router-link';
import { Seo } from 'src/app/components/seo';
import { usePageView } from 'src/app/hooks/use-page-view';
import { paths } from 'src/app/paths';
import { ContactForm } from './contact-form';

export const Contact = () => {
  usePageView();

  return (
    <>
      <Seo title="Contact" />
      <Box
        component="main"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: 'repeat(2, 1fr)',
            xs: 'repeat(1, 1fr)',
          },
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
            py: 8,
          }}
        >
          <Container
            maxWidth="md"
            sx={{ pl: { lg: 15 } }}
          >
            {/* <Stack spacing={3}>
              <Typography variant="h3">Contact</Typography>
            </Stack> */}
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{
                mb: 6,
                mt: 8,
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                }}
                variant="rounded"
              >
                <SvgIcon>
                  <EmailIcon />
                </SvgIcon>
              </Avatar>
              <Typography variant="overline">Contact us</Typography>
            </Stack>
            <Typography
              sx={{ mb: 3 }}
              variant="h1"
            >
              Talk to our account expert
            </Typography>
            <Typography
              sx={{ mb: 3 }}
              variant="body1"
            >
              Have questions about integrating our APIs? Fill out the form and a senior web expert
              will be in touch shortly.
            </Typography>
          </Container>
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            px: 6,
            py: 15,
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              pr: {
                lg: 15,
              },
            }}
          >
            <Typography
              sx={{ pb: 3 }}
              variant="h6"
            >
              Fill the form below
            </Typography>
            <ContactForm />
          </Container>
        </Box>
      </Box>
    </>
  );
};

