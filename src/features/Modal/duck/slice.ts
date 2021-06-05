import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';
import { TModal } from '@main/features/Modal/types/TModal';

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
    },
    changeActiveModal: (draft, action: PayloadAction<TModal>) => {
      draft.state.activeModal = action.payload;
    },
  },
});
