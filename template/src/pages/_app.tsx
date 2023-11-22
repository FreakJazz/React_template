// Remove if react-quill is not used
// import 'react-quill/dist/quill.snow.css';
// // Remove if react-draft-wysiwyg is not used
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// // Remove if simplebar is not used
// import 'simplebar-react/dist/simplebar.min.css';
// // Remove if mapbox is not used
// import 'mapbox-gl/dist/mapbox-gl.css';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import '../app/styles/globals.css';
// Remove if locales are not used
import 'src/app/locales/i18n';

import { RTL } from 'src/app/components/rtl';
import { SettingsButton } from 'src/app/components/settings/settings-button';
import { SettingsDrawer } from 'src/app/components/settings/settings-drawer';
import { Toaster } from '../app/components/toaster';
// import { gtmConfig } from '../config';
import { SettingsConsumer, SettingsProvider } from 'src/app/contexts/settings';
// import { useAnalytics } from 'app/hooks/use-analytics';
// import { useNprogress } from 'app/hooks/use-nprogress';
import { store } from 'src/app/store';
import { createTheme } from 'src/app/theme';
import { createEmotionCache } from 'src/app/utils/create-emotion-cache';

const clientSideEmotionCache = createEmotionCache();

export interface CustomAppProps extends AppProps {
  Component: NextPage;
  emotionCache?: EmotionCache;
}

const CustomApp = (props: CustomAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // useAnalytics(gtmConfig);
  // useNprogress();

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Devias Kit PRO</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <ReduxProvider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                <SettingsProvider>
                  <SettingsConsumer>
                    {(settings: any) => {
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
                              <>
                                {getLayout(<Component {...pageProps} />)}
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
                            <Toaster />
                          </RTL>
                        </ThemeProvider>
                      );
                    }}
                  </SettingsConsumer>
                </SettingsProvider>
        </LocalizationProvider>
      </ReduxProvider>
    </CacheProvider>
  );
};

export default CustomApp;