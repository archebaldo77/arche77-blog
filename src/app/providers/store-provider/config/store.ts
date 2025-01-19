import { configureStore } from '@reduxjs/toolkit';

import { type StateSchema } from '../config/state-schema';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      value: () => `string`,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
