import { FC } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import { BannerSliderContent } from './banner-slider-content';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

interface BannerData {
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface BannerSliderProps {
  banners: BannerData[];
}

export const BannerSlider: FC<BannerSliderProps> = ({ banners }) => (
  <Box
    sx={{
      "& .slick-list": {
        borderRadius: 2,
        boxShadow: 12,
      },
      "& .slick-dots": {
        bottom: "unset",
        left: (theme) => theme.spacing(3),
        textAlign: "center",
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
    <Slider {...sliderSettings}>
      {banners.map((banner, index) => (
        <BannerSliderContent
          key={index}
          imageUrl={banner.imageUrl}
          title={banner.title}
          subtitle={banner.subtitle}
        />
      ))}
    </Slider>
  </Box>
);

BannerSlider.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
