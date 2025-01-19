import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';

import { type ReactNode } from 'react';
import { type StateSchema } from '../config/state-schema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps): JSX.Element => {
  const { children = ``, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
