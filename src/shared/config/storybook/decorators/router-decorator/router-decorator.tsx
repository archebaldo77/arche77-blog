// libraries;
import { MemoryRouter } from 'react-router-dom';

// types;
import { type StoryFn } from '@storybook/react/*';

export const RouterDecorator = (Story: StoryFn): JSX.Element => (
  <MemoryRouter basename="/">
    <Story />
  </MemoryRouter>
);
