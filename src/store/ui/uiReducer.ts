import { UiState } from './';

type UiActionType =
  | { type: '[UI] - setTheme'; payload: string }
  | { type: '[UI] - setDir'; payload: string }
  | { type: '[UI] - setLanguage'; payload: string }
  | { type: '[UI] - setBorderRadius'; payload: string }
  | { type: '[UI] - setDarkMode'; payload: "light" | "dark" }
  | { type: '[UI] - toggleLayout'; payload: "full" | "boxed" }
  | { type: '[UI] - setCardShadow' }
  | { type: '[UI] - hoverSidebar' }
  | { type: '[UI] - toggleSidebar' }
  | { type: '[UI] - toggleMobileSidebar' }
  | { type: '[UI] - toggleHorizontal' }
  | { type: '[UI] - ToggleMenu' };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case '[UI] - setTheme':
      return {
        ...state,
        activeTheme: action.payload,
      };
    case '[UI] - setDarkMode':
      return {
        ...state,
        activeMode: action.payload,
      };
    case '[UI] - setDir':
      return {
        ...state,
        activeDir: action.payload,
      };
    case '[UI] - setLanguage':
      return {
        ...state,
        activeLanguage: action.payload,
      };
    case '[UI] - setCardShadow':
      return {
        ...state,
        isCardShadow: !state.isCardShadow,
      };
    case '[UI] - toggleSidebar':
      return {
        ...state,
        isCollapse: !state.isCollapse,
      };
    case '[UI] - hoverSidebar':
      return {
        ...state,
        isSidebarHover: !state.isSidebarHover,
      };
    case '[UI] - toggleMobileSidebar':
      return {
        ...state,
        isMobileSidebar: !state.isMobileSidebar,
      };
    case '[UI] - toggleLayout':
      return {
        ...state,
        isLayout: action.payload,
      };
    case '[UI] - toggleHorizontal':
      return {
        ...state,
        isHorizontal: !state.isHorizontal,
      };
    case '[UI] - setBorderRadius':
      return {
        ...state,
        borderRadius: action.payload,
      };
    case '[UI] - ToggleMenu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    default:
      return state;
  }
};
