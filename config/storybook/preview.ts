import type { Preview } from '@storybook/react';

import { Theme } from '@/app/providers/theme-provider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/theme-decorator';
import { RouterDecorator } from '@/shared/config/storybook/decorators/router-decorator';

import '@/app/styles/style-for-storybook.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: `light`, value: `white` },
        { name: `dark`, value: `black` },
      ],
      default: `light`,
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
