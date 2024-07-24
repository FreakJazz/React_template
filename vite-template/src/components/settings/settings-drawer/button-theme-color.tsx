import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import { useSettings } from '../../../hooks/use-settings';
import { light, dark } from '../../../utils/theme';
// eslint-disable-next-line import/named
import { PaletteMode } from '@mui/material';

interface ButtonThemeColorProps {
  onClick?: () => void;
}

export const ButtonThemeColor: FC<ButtonThemeColorProps> = () => {
  const { paletteMode, handleUpdate } = useSettings();
  const [isDarkMode, setIsDarkMode] = useState(paletteMode === dark.value);

  useEffect(() => {
    setIsDarkMode(paletteMode === dark.value);
  }, [paletteMode]);

  const handleClick = () => {
    const selectedMode: PaletteMode = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    handleUpdate({ paletteMode: selectedMode });
  };


  const currentOption = isDarkMode ? dark : light;

  return (
    <Tooltip title="Toggle Theme">
      <ButtonBase 
        onClick={handleClick} 
        sx={{ borderRadius: '50%', padding: '10px' }}>
        {currentOption.icon}
      </ButtonBase>
    </Tooltip>
  );
};

ButtonThemeColor.propTypes = {
  onClick: PropTypes.func,
};
