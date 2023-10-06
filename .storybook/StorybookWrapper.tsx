import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Decorator } from '@storybook/react';
import { NextAppDirEmotionCacheProvider } from '@/utils/theme/EmotionCache';
import { ThemeSettings } from '@/utils/theme/Theme';
import { UiProvider, UiContext } from '@/store';
import { useContext, useEffect } from 'react';

interface Props {
  children?: JSX.Element;
  context: any;
}

const StorybookWrapper = ({ children, context }: Props) => {
  const theme = ThemeSettings();
  
  const { setTheme, setDir, setDarkMode } = useContext(UiContext);

  useEffect(() => {
    setTheme(context.globals.theme);
    setDir('ltr');
    setDarkMode(context.globals.mode);
    return () => {};
  }, [context]);

  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: 'basetemplate' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};

const ProviderWrapper: Decorator = (Story, context) => {
  return (
    <>
      <UiProvider>
        <StorybookWrapper context={context}>
          <Story />
        </StorybookWrapper>
      </UiProvider>
    </>
  );
};

export { ProviderWrapper };
