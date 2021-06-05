import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';
import { Pages } from '@main/features/App/enums/Pages';
import { Router } from '@common/router/Router';

interface IApp {
  activePanel: Pages;
}

export type IState = IBaseFeatureState<IApp>;

const router = new Router();

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    state: {
      activePanel: Pages.INDEX,
    },
  } as IState,
  reducers: {
    setActivePanel: (draft, action: PayloadAction<Pages>) => {
      draft.state.activePanel = action.payload;
      router.pushHistory('panel', action.payload);
    },
    changeActivePanel: (draft, action: PayloadAction<Pages>) => {
      draft.state.activePanel = action.payload;
    },
  },
});
