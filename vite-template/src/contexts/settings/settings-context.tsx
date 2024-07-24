import { createContext, useState, useEffect, FC } from 'react';
import type { Settings } from 'src/types/settings';

export const defaultSettings: Settings = {
  colorPreset: 'blue',
  contrast: 'normal',
  direction: 'ltr',
  layout: 'vertical',
  navColor: 'evident',
  paletteMode: 'light',
  responsiveFontSizes: true,
  stretch: false,
};

export interface State extends Settings {
  isInitialized: boolean;
}

export const initialState: State = {
  ...defaultSettings,
  isInitialized: false,
};

export interface SettingsContextType extends State {
  handleUpdate: (settings: Partial<Settings>) => void;
}

export const SettingsContext = createContext<SettingsContextType>({
  ...initialState,
  handleUpdate: () => {},
});

export const SettingsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<State>(initialState);

  const handleUpdate = (updatedSettings: Partial<Settings>) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...updatedSettings,
    }));
  };

  useEffect(() => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      isInitialized: true,
    }));
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        handleUpdate,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
