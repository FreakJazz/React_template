import { FC, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { SxProps } from '@mui/system';
import { SliderContent } from "./slider-content";

const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface Tip {
  title: string;
  content: string;
  urlImage: string;
  id: string;
}

interface SliderDataProps {
  sx?: SxProps;
  tips: Tip[];
}

export const SliderPrincipal: FC<SliderDataProps> = (props) => {
  const { tips, sx } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
  };

  return (
    <Box
      sx={{
        "& .slick-list": {
          borderRadius: 2,
          boxShadow: 12,
        },
        "& .slick-dots": {
          bottom: "unset",
          left: (theme) => theme.spacing(3),
          textAlign: "left",
          top: (theme) => theme.spacing(1),
        },
        "& .slick-dots li button": {
          "&:before": {
            fontSize: 10,
            color: "common.white",
          },
        },
        "& .slick-dots li.slick-active button": {
          "&:before": {
            color: "common.white",
          },
        },
      }}
    >
      <Slider {...settings}>
        <Grid container spacing={2}>
          {tips.map((item) => (
            <SliderContent
              key={item.id}
              title={item.title}
              urlImage={item.urlImage}
              description={item.content}
              id={item.id}
            />
          ))}
        </Grid>
      </Slider>
    </Box>
  );
};

SliderPrincipal.propTypes = {
  sx: PropTypes.object,
  tips: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      urlImage: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
