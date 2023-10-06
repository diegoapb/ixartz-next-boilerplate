import { createContext } from 'react';
import { UiState } from './UiProvider';

interface ContextProps extends UiState {
  // Methods
  toggleSideMenu: () => void;
  setTheme: (darkMode: string) => void;
  setDir: (darkMode: string) => void;
  setLanguage: (darkMode: string) => void;
  setBorderRadius: (darkMode: string) => void;
  setDarkMode: (darkMode: 'light' | 'dark') => void;
  toggleLayout: (darkMode: 'full' | 'boxed') => void;
  setCardShadow: () => void;
  hoverSidebar: () => void;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  toggleHorizontal: () => void;
}

export const UiContext = createContext({} as ContextProps);
