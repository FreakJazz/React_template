import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import './global.css';
// Remove if locales are not used
import './locales/i18n';

import { RTL } from './components/rtl';
import { SplashScreen } from './components/splash-screen';
import { SettingsButton } from './components/settings/settings-button';
import { SettingsDrawer } from './components/settings/settings-drawer';
import { Toaster } from './components/toaster';
import { AuthConsumer, AuthProvider } from './contexts/auth/jwt';
import { SettingsConsumer, SettingsProvider } from './contexts/settings';
import { gtmConfig } from './config';
import { useNprogress } from './hooks/use-nprogress';
import { useAnalytics } from './hooks/use-analytics';
import { routes } from './routes';
import { store } from './store';
import { createTheme } from './theme';
import { useSettings } from './hooks/use-settings';
import { ButtonThemeColor } from './components/settings/settings-drawer/button-theme-color';

export const App: FC = () => {
  const { paletteMode, colorPreset, contrast, direction } = useSettings();

  useAnalytics(gtmConfig);
  useNprogress();

  const element = useRoutes(routes);

  const theme = createTheme({
    paletteMode,
    colorPreset,
    contrast,
    direction,
  });

  return (
    <ReduxProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
           
              <SettingsProvider>
                <SettingsConsumer>
                  {(settings) => {
                    // Prevent theme flicker when restoring custom settings from browser storage
                    if (!settings.isInitialized) {
                      // return null;
                    }

                    const theme = createTheme({
                      colorPreset: settings.colorPreset,
                      contrast: settings.contrast,
                      direction: settings.direction,
                      paletteMode: settings.paletteMode,
                      responsiveFontSizes: settings.responsiveFontSizes,
                    });

                    return (
                      <ThemeProvider theme={theme}>
                        <Helmet>
                          <meta
                            name="color-scheme"
                            content={settings.paletteMode}
                          />
                          <meta
                            name="theme-color"
                            content={theme.palette.neutral[900]}
                          />
                        </Helmet>
                        <RTL direction={settings.direction}>
                          <CssBaseline />
                          
                            <>
                              {element}
                              
                            </> 
                          <Toaster />
                        </RTL>
                      </ThemeProvider>
                    );
                  }}
                </SettingsConsumer>
              </SettingsProvider>
        </AuthProvider>
      </LocalizationProvider>
    </ReduxProvider>
  );
};
