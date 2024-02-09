'use client';

import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import Cookies from 'js-cookie';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// Remove if locales are not used
import 'src/app/locales/i18n';

import { RTL } from 'src/app/components/rtl';
import { SplashScreen } from 'src/app/components/splash-screen';
import { SettingsButton } from 'src/app/components/settings/settings-button';
import { SettingsDrawer } from 'src/app/components/settings/settings-drawer';
import { Toaster } from 'src/app/components/toaster';
import { gtmConfig } from 'src/app/config';
import { SettingsConsumer, SettingsProvider } from 'src/app/contexts/settings';
import { useAnalytics } from 'src/app/hooks/use-analytics';
import { store } from 'src/app/store';
import { createTheme } from 'src/app/theme';
import type { Settings } from 'src/app/types/settings';

const SETTINGS_STORAGE_KEY = 'app.settings';

const resetSettings = (): void => {
  try {
    Cookies.remove(SETTINGS_STORAGE_KEY);
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

const updateSettings = (settings: Settings): void => {
  try {
    Cookies.set(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

interface LayoutProps {
  children: ReactNode;
  settings?: Settings;
}

export const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children, settings } = props;

  useAnalytics(gtmConfig);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <ReduxProvider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                <SettingsProvider
                  onReset={resetSettings}
                  onUpdate={updateSettings}
                  settings={settings}
                >
                  <SettingsConsumer>
                    {(settings) => {
                      const theme = createTheme({
                        colorPreset: settings.colorPreset,
                        contrast: settings.contrast,
                        direction: settings.direction,
                        paletteMode: settings.paletteMode,
                        responsiveFontSizes: settings.responsiveFontSizes,
                      });
                      return (
                        <ThemeProvider theme={theme}>
                          <Head>
                            <meta
                              name="color-scheme"
                              content={settings.paletteMode}
                            />
                            <meta
                              name="theme-color"
                              content={theme.palette.neutral[900]}
                            />
                          </Head>
                          <RTL direction={settings.direction}>
                            <CssBaseline />
                            {showSlashScreen ? (
                              <SplashScreen />
                            ) : (
                              <>
                                {children}
                                <SettingsButton onClick={settings.handleDrawerOpen} />
                                <SettingsDrawer
                                  canReset={settings.isCustom}
                                  onClose={settings.handleDrawerClose}
                                  onReset={settings.handleReset}
                                  onUpdate={settings.handleUpdate}
                                  open={settings.openDrawer}
                                  values={{
                                    colorPreset: settings.colorPreset,
                                    contrast: settings.contrast,
                                    direction: settings.direction,
                                    paletteMode: settings.paletteMode,
                                    responsiveFontSizes: settings.responsiveFontSizes,
                                    stretch: settings.stretch,
                                    layout: settings.layout,
                                    navColor: settings.navColor,
                                  }}
                                />
                              </>
                            )}
                            <Toaster />
                          </RTL>
                        </ThemeProvider>
                      );
                    }}
                  </SettingsConsumer>
                </SettingsProvider>
        </LocalizationProvider>
      </ReduxProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
