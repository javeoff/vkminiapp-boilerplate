import {
  configureStore,
  getDefaultMiddleware,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';

import { Feature } from '@common/enums/Feature';
import { indexSlice } from '@pages/Index/duck/slice';
import { modalSlice } from '@main/features/Modal/duck/slice';
import { appSlice } from '@main/features/App/duck/slice';

const reducer = {
  [Feature.APP]: appSlice.reducer,
  [Feature.INDEX]: indexSlice.reducer,
  [Feature.MODAL]: modalSlice.reducer,
};

export type IRootState = StateFromReducersMapObject<typeof reducer>;

const middleware = getDefaultMiddleware({ thunk: true });

const store = configureStore({
  reducer,
  middleware,
});

export { store };
