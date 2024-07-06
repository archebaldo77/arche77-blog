// decorators;
import {
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
  SuspenseDecorator,
} from '@/shared/config/storybook/decorators';

// helpers;
import { Theme } from '@/app/providers/theme';

// types;
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    RouterDecorator,
    SuspenseDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
  ],
};

export default preview;
