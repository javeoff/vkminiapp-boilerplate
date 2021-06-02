import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';

import { Feature } from '@common/enums/Feature';
import { indexSlice } from '@pages/Index/duck/slice';
import { appSlice } from '@pages/App/duck/slice';

const reducer = {
  [Feature.APP]: appSlice.reducer,
  [Feature.INDEX]: indexSlice.reducer,
};

export type IRootState = StateFromReducersMapObject<typeof reducer>;

const middleware = getDefaultMiddleware({ thunk: true });

const store = configureStore({
  reducer,
  middleware,
});

export { store };
