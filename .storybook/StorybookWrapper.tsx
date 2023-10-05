import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Decorator } from '@storybook/react';
import { NextAppDirEmotionCacheProvider } from '@/utils/theme/EmotionCache';
import { ThemeSettings } from '@/utils/theme/Theme';

const StorybookWrapper: Decorator = (Story, context) => {
  console.log('🚀 ~ file: StorybookWrapper.tsx:8 ~ context:', context);
  const theme = ThemeSettings(
    'ltr',
    context.globals.theme, // Color global
    context.globals.mode // Theme de MUI
  );
  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: 'basetemplate' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};

export { StorybookWrapper };
