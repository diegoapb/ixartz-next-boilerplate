// tsup.config.ts

import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: [ '.storybook/preview.ts', '.storybook/addons/manager.tsx'],
  splitting: false,
  minify: !options.watch,
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
  },
  treeshake: true,
  sourcemap: true,
  clean: true,
  platform: 'browser',
  esbuildOptions(options) {
    options.conditions = ['module'];
  },
}));