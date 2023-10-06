import _ from 'lodash';
import { createTheme } from '@mui/material/styles';
import { useContext, useEffect } from 'react';
import components from './Components';
import typography from './Typography';
import { shadows, darkshadows } from './Shadows';
import { DarkThemeColors } from './DarkThemeColors';
import { LightThemeColors } from './LightThemeColors';
import { baseDarkTheme, baselightTheme } from './DefaultColors';
import * as locales from '@mui/material/locale';
import { UiContext } from '@/store';

export const BuildTheme = () => {
  const { activeDir, activeMode, activeTheme, borderRadius } =
    useContext(UiContext);

  const themeOptions = LightThemeColors.find(
    (theme) => theme.name === activeTheme
  );
  const darkthemeOptions = DarkThemeColors.find(
    (theme) => theme.name === activeTheme
  );
  const defaultTheme = activeMode === 'dark' ? baseDarkTheme : baselightTheme;
  const defaultShadow = activeMode === 'dark' ? darkshadows : shadows;
  const themeSelect = activeMode === 'dark' ? darkthemeOptions : themeOptions;
  const baseMode = {
    palette: {
      mode: activeMode,
    },
    shape: {
      borderRadius: borderRadius,
    },
    shadows: defaultShadow,
    typography: typography,
  };
  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect, {
      direction: activeDir,
    })
  );
  theme.components = components(theme);

  return theme;
};

const ThemeSettings = () => {
  const { activeDir } = useContext(UiContext);
  const theme = BuildTheme();
  useEffect(() => {
    document.dir = activeDir;
  }, [activeDir]);

  return theme;
};

export { ThemeSettings };
