import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';

interface IApp {
  activePanel: string;
}

export type IState = IBaseFeatureState<IApp>;

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    state: {
      activePanel: 'index',
    },
  } as IState,
  reducers: {
    setActivePanel: (draft, action: PayloadAction<string>) => {
      draft.state.activePanel = action.payload;
    },
  },
});
