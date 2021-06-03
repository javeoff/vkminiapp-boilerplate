import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';

interface IApp {
  activeModal: string | null;
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
    setActiveModal: (draft, action: PayloadAction<string | null>) => {
      draft.state.activeModal = action.payload;
    },
  },
});
