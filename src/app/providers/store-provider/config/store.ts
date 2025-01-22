import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/user';

import { type StateSchema } from '../config/state-schema';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
