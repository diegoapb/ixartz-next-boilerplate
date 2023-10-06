import { useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
  isMenuOpen?: boolean;
  activeDir?: string | any;
  activeMode?: 'light' | 'dark';
  activeTheme?: string; // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
  SidebarWidth?: number;
  MiniSidebarWidth?: number;
  TopbarHeight?: number;
  isCollapse?: boolean;
  isLayout?: 'full' | 'boxed';
  isSidebarHover?: boolean;
  isMobileSidebar?: boolean;
  isHorizontal?: boolean;
  activeLanguage?: string;
  isCardShadow?: boolean;
  borderRadius?: number | any;
}

interface Props {
  children?: JSX.Element;
}

const UI_INITIAL_STATE: UiState = {
  isMenuOpen: false,
  activeDir: 'ltr',
  activeMode: 'light', // This can be light or dark
  activeTheme: 'BLUE_THEME', // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
  SidebarWidth: 270,
  MiniSidebarWidth: 87,
  TopbarHeight: 70,
  isLayout: 'boxed', // This can be full or boxed
  isCollapse: false, // to make sidebar Mini by default
  isSidebarHover: false,
  isMobileSidebar: false,
  isHorizontal: false,
  activeLanguage: 'en',
  isCardShadow: true,
  borderRadius: 7,
};

export const UiProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setTheme = (colorTheme: string) => {
    dispatch({ type: '[UI] - setTheme', payload: colorTheme });
  };
  const setDir = (layoutDirection: string) => {
    dispatch({ type: '[UI] - setDir', payload: layoutDirection });
  };
  const setLanguage = (language: string) => {
    dispatch({ type: '[UI] - setLanguage', payload: language });
  };
  const setBorderRadius = (borderRadius: string) => {
    dispatch({ type: '[UI] - setBorderRadius', payload: borderRadius });
  };
  const setDarkMode = (darkMode: 'light' | 'dark') => {
    dispatch({ type: '[UI] - setDarkMode', payload: darkMode });
  };
  const toggleLayout = (layoutType: 'full' | 'boxed') => {
    dispatch({ type: '[UI] - toggleLayout', payload: layoutType });
  };
  const setCardShadow = () => {
    dispatch({ type: '[UI] - setCardShadow' });
  };
  const hoverSidebar = () => {
    dispatch({ type: '[UI] - hoverSidebar' });
  };
  const toggleSidebar = () => {
    dispatch({ type: '[UI] - toggleSidebar' });
  };
  const toggleMobileSidebar = () => {
    dispatch({ type: '[UI] - toggleMobileSidebar' });
  };
  const toggleHorizontal = () => {
    dispatch({ type: '[UI] - toggleHorizontal' });
  };
  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - ToggleMenu' });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        // Methods
        toggleSideMenu,
        setTheme,
        setDir,
        setLanguage,
        setBorderRadius,
        setDarkMode,
        toggleLayout,
        setCardShadow,
        hoverSidebar,
        toggleSidebar,
        toggleMobileSidebar,
        toggleHorizontal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
