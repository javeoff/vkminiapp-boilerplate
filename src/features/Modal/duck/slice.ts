import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';
import { TModal } from '@main/features/Modal/types/TModal';
import { Router } from '@common/router/Router';

interface IApp {
  activeModal: TModal;
}

export type IState = IBaseFeatureState<IApp>;

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    state: {
      activeModal: null,
    },
  } as IState,
  reducers: {
    setActiveModal: (draft, action: PayloadAction<TModal>) => {
      draft.state.activeModal = action.payload;
      const router = new Router();

      if (action.payload) {
        router.pushHistory('modal', action.payload);
      } else {
        router.popHistory();
      }
    },
    changeActiveModal: (draft, action: PayloadAction<TModal>) => {
      draft.state.activeModal = action.payload;
    },
  },
});
