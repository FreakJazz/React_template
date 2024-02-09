import type { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { RouterLink } from "../components/router-link";
import { paths } from "../paths";
import { oneTitle, twoTitle } from "../config";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
      borderTopColor: "divider",
      borderTopStyle: "solid",
      borderTopWidth: 1,
      pb: 2,
      pt: {
        md: 15,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid
          xs={12}
          sm={4}
          md={3}
          sx={{
            order: {
              xs: 4,
              md: 1,
            },
          }}
        >
          <Stack spacing={1}>
            <Stack
              alignItems="center"
              component={RouterLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              spacing={1}
              sx={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  height: 24,
                  width: 24,
                }}
              >
                {/* <Logo /> */}
              </Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: "0.3px",
                  lineHeight: 2.5,
                  "& span": {
                    color: "primary.main",
                  },
                }}
              >
                {oneTitle} <span>{twoTitle}</span>
              </Box>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              © 2023 Your Company
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          md={3}
          sx={{
            order: {
              xs: 4,
              md: 1,
            },
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            gap={4}
            justifyContent="center"
            sx={{
              color: "action.active",
              "& > *": {
                flex: "0 0 auto",
              },
            }}
          >
            <LinkedInIcon />
            <YouTubeIcon />
            <FacebookIcon />
            <InstagramIcon />
            <WhatsAppIcon />
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Typography color="text.secondary" variant="caption">
        All Rights Reserved.
      </Typography>
    </Container>
  </Box>
);
