import SvgIcon from '@mui/material/SvgIcon';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import { ThemeOption } from '../types/theme';

export const dark: ThemeOption = {
    label: 'Dark',
    value: 'dark',
    icon: (
      <SvgIcon fontSize="small">
        <NightlightRoundedIcon />
      </SvgIcon>
    ),
  };
  
export const light: ThemeOption = {
    label: 'Light',
    value: 'light',
    icon: (
      <SvgIcon fontSize="small">
        <WbSunnyRoundedIcon />
      </SvgIcon>
    ),
  };