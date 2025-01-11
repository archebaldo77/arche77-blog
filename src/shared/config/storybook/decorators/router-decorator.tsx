import { MemoryRouter } from 'react-router-dom';

import { type StoryFn } from '@storybook/react';

export const RouterDecorator = (Story: StoryFn): JSX.Element => {
  return (
    <MemoryRouter initialEntries={[`/`]}>
      <Story />
    </MemoryRouter>
  );
};
