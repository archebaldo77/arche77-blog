// libraries;
import { Suspense } from 'react';

// types;
import { type StoryFn } from '@storybook/react/*';

export const SuspenseDecorator = (Story: StoryFn): JSX.Element => (
  <Suspense fallback="Fake Loading...">
    <Story />
  </Suspense>
);
