import { Theme } from '@/app/providers/theme-provider';

import { type StoryFn } from '@storybook/react';

export const ThemeDecorator =
  (theme: Theme) =>
  (Story: StoryFn): JSX.Element => {
    return (
      <div className={theme}>
        <Story />
      </div>
    );
  };
