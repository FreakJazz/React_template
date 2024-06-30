import { FC, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Grid , Box, Card, CardContent} from "@mui/material";
import { SxProps } from '@mui/system';
import { SliderContent } from "./slider-content";

interface Tip {
  id: string;
  title: string;
  content: string;
  urlImage: string;
}

interface SliderDataProps {
  sx?: SxProps;
  data: Tip[];
}

export const SliderPrincipal: FC<SliderDataProps> = (props) => {
  const { data, sx } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <Card sx={sx}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            '& .slick-slider': {
              cursor: 'grab',
            },
            '& .slick-slider, & .slick-list, & .slick-track': {
              height: '100%',
            },
            '& .slick-dots': {
              top: -20,
              bottom: 'unset',
              left: -10,
              textAlign: 'center',
            },
          }}
        >
          <Slider {...sliderSettings}>
        {data.map((item) => (
          <div key={item.title}>
            <SliderContent
              title={item.title}
              urlImage={item.urlImage}
              description={item.content}
              id={item.id}
            />
                          </div>

            ))}
          </Slider>
        </Box>
      </CardContent>
    </Card>
  );
};

SliderPrincipal.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      urlImage: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
