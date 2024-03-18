import { FC, ReactElement, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import type { PaletteMode } from 'src/app/theme';

interface Option {
  label: string;
  value: PaletteMode;
  icon: ReactElement;
}

const dark: Option = {
  label: 'Dark',
  value: 'dark',
  icon: (
    <SvgIcon fontSize="small">
      <DarkModeRoundedIcon />
    </SvgIcon>
  ),
};

const light: Option = {
  label: 'Light',
  value: 'light',
  icon: (
    <SvgIcon fontSize="small">
      <WbSunnyRoundedIcon />
    </SvgIcon>
  ),
};

interface OptionColorProps {
  onChange?: (value: PaletteMode) => void;
  value?: PaletteMode;
}

const OptionColor: FC<OptionColorProps> = ({ onChange, value }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(value === dark.value);

  const handleClick = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    const selectedMode = isDarkMode ? light.value : dark.value;
    onChange?.(selectedMode);
  };

  const currentOption = isDarkMode ? dark : light;

  return (
    <Button variant="outlined" onClick={handleClick} startIcon={currentOption.icon} />

  );
};

OptionColor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['light', 'dark']),
};

export default OptionColor;