import type { FC } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";

interface SliderContentProps {
  id: string;
  title: string;
  urlImage: string;
  description: string;
}

export const SliderContent: FC<SliderContentProps> = (props) => {
  const { title, urlImage, description, id } = props;

  return (
    <Grid key={id} xs={12} md={6} lg={4}>
      <Card sx={{ height: "100%" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "auto",
              "& img": {
                height: "60%",
                width: "auto",
              },
            }}
          >
            <img alt="" src={urlImage} />
          </Box>
          <Box
            sx={{
              mt: 0,
              mb: 2,
            }}
          >
            <Typography
              sx={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, #000000 100%)",
                backgroundClip: "text",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "0.1em",
                lineHeight: "32px",
                textFillColor: "transparent",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography
            sx={{
              flexGrow: 1,
              mt: 2,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

SliderContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
