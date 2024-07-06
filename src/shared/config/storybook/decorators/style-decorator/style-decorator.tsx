// types;
import { type StoryFn } from '@storybook/react/*';

// styles;
import '@/app/styles/style.scss';

export const StyleDecorator = (Story: StoryFn): JSX.Element => <Story />;
