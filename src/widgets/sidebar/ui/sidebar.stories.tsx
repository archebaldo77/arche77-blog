import { Theme } from '@/app/providers/theme-provider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/theme-decorator';

import { Sidebar } from './sidebar';

import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    layout: `fullscreen`,
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: `text`,
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarWithLightTheme: Story = {};

export const SidebarWithDarkTheme: Story = {
  parameters: {
    backgrounds: {
      default: `dark`,
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
