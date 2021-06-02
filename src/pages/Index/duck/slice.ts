import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';

interface IIndex {
  title: string;
}

export type IState = IBaseFeatureState<IIndex>;

export const indexSlice = createSlice({
  name: 'index',
  initialState: {
    state: {
      title: 'index page',
    },
  } as IState,
  reducers: {
    setTitle: (draft, action: PayloadAction<string>) => {
      draft.state.title = action.payload;
    },
  },
});
