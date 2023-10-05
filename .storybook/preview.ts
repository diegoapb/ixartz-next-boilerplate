import '../src/styles/global.css';
import { StorybookWrapper } from './StorybookWrapper';

// import "react-quill/dist/quill.snow.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import type { Preview } from '@storybook/react';

export const globalTypes = {
  // containerSize: {
  //   name: 'Container size',
  //   // Text that will be shown on icon hover
  //   description: "Global container's size",
  //   defaultValue: 'xs',
  //   toolbar: {
  //     /**
  //      * You can check all available icons by this link:
  //      * https://storybook.js.org/docs/riot/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
  //      */
  //     icon: 'circlehollow',
  //     items: ['xs', 'sm', 'md', 'lg', 'xl'],
  //     // Should "Container size" be shown, or just the "circlehollow" icon
  //     showName: true,
  //   },
  // },
  theme: {
    name: 'Theme', // Color global
    description: 'Global Color',
    defaultValue: 'BLUE_THEME',
    toolbar: {
      icon: 'lightning',
      items: [
        'BLUE_THEME',
        'GREEN_THEME',
        'BLACK_THEME',
        'PURPLE_THEME',
        'ORANGE_THEME',
      ],
      showName: true,
    },
  },
  mode: {
    name: 'Mode',
    description: 'Mui Theme', // Theme de MUI
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [ 'light','dark'],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StorybookWrapper],
};

export default preview;

// import { addDecorator } from '@storybook/react';
// import { ThemeProvider } from '@material-ui/core/styles';

// import { muiTheme } from '../src/stylesheet';

// addDecorator((story) => (
//     <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>
// ));
