import _ from 'lodash';
import { createTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import components from './Components';
import typography from './Typography';
import { shadows, darkshadows } from './Shadows';
import { DarkThemeColors } from './DarkThemeColors';
import { LightThemeColors } from './LightThemeColors';
import { baseDarkTheme, baselightTheme } from './DefaultColors';
import * as locales from '@mui/material/locale';

const CUSTOMIZER = {
  activeDir: 'ltr',
  activeMode: 'ligth', // This can be light or dark
  activeTheme: 'BLUE_THEME', // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
  SidebarWidth: 270,
  MiniSidebarWidth: 87,
  TopbarHeight: 70,
  isLayout: 'boxed', // This can be full or boxed
  isCollapse: false, // to make sidebar Mini by default
  isSidebarHover: false,
  isMobileSidebar: false,
  isHorizontal: false,
  isLanguage: 'en',
  isCardShadow: true,
  borderRadius: 7,
};

export const BuildTheme = (config: any = {}) => {
  const themeOptions = LightThemeColors.find((theme) => theme.name === config.theme);
  const darkthemeOptions = DarkThemeColors.find((theme) => theme.name === config.theme);
  // const customizer = useSelector((state: AppState) => state.customizer);
  const customizer = CUSTOMIZER
  // const defaultTheme = customizer.activeMode === 'dark' ? baseDarkTheme : baselightTheme;
  const defaultTheme = config.mode === 'dark' ? baseDarkTheme : baselightTheme;
  // const defaultShadow = customizer.activeMode === 'dark' ? darkshadows : shadows;
  const defaultShadow = config.mode === 'dark' ? darkshadows : shadows;
  // const themeSelect = customizer.activeMode === 'dark' ? darkthemeOptions : themeOptions;
  const themeSelect = config.mode === 'dark' ? darkthemeOptions : themeOptions;
  const baseMode = {
    palette: {
      // mode: customizer.activeMode,
      mode: config.mode,
    },
    shape: {
      // borderRadius: customizer.borderRadius,
      borderRadius: customizer.borderRadius,
    },
    shadows: defaultShadow,
    typography: typography,
  };
  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect, {
      direction: config.direction,
    }),
  );
  theme.components = components(theme);

  return theme;
};

const ThemeSettings = (
  activDir = CUSTOMIZER.activeDir,
  activeTheme = CUSTOMIZER.activeTheme,
  activeMode = CUSTOMIZER.activeMode
) => {
  // const activDir = useSelector((state: AppState) => state.customizer.activeDir);
  // const activDir = CUSTOMIZER.activeDir;
  // const activeTheme = useSelector((state: AppState) => state.customizer.activeTheme);
  // const activeTheme = CUSTOMIZER.activeTheme
  const theme = BuildTheme({
    direction: activDir,
    theme: activeTheme,
    mode: activeMode,
  });
  useEffect(() => {
    document.dir = activDir;
  }, [activDir]);

  return theme;
};


export { ThemeSettings };
