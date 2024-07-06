// widgets;
import { Header } from './header';

// helpers;
import { Theme } from '@/app/providers/theme';

// decorators;
import { ThemeDecorator } from '@/shared/config/storybook/decorators';

// types;
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'widgets/Header',
  component: Header,
  parameters: {
    layout: 'fullscreeen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderLightTheme: Story = {};
export const HeaderDarkTheme: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
