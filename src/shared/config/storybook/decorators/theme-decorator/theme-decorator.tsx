// types;
import { type Theme } from '@/app/providers/theme';
import { type StoryFn } from '@storybook/react/*';

export const ThemeDecorator =
  (theme: Theme) =>
  (Story: StoryFn): JSX.Element => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
