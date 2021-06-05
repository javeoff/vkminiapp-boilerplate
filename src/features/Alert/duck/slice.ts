import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';
import { TAction } from '@main/features/Alert/types/TAction';
import { TActionsLayout } from '@main/features/Alert/types/TActionsLayout';

interface IAlert {
  actionsLayout?: TActionsLayout;
  actions?: TAction[];
  header?: ReactNode;
  text?: ReactNode;
  onClose?: VoidFunction;
}

export type IState = IBaseFeatureState<IAlert>;

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    state: {
      actions: [
        {
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel',
        },
        {
          title: 'Удалить',
          autoclose: true,
          mode: 'destructive',
          action: () => {},
        },
      ],
      actionsLayout: 'horizontal',
      onClose: () => {},
      header: 'Удаление документа',
      text: 'Вы уверены, что хотите удалить этот документ?',
    },
  } as IState,
  reducers: {
    setActions: (draft, action: PayloadAction<TAction[]>) => {
      draft.state.actions = action.payload;
    },
    setActionsLayout: (draft, action: PayloadAction<TActionsLayout>) => {
      draft.state.actionsLayout = action.payload;
    },
    setHeader: (draft, action: PayloadAction<string>) => {
      draft.state.header = action.payload;
    },
    setText: (draft, action: PayloadAction<string>) => {
      draft.state.text = action.payload;
    },
    setOnClose: (draft, action: PayloadAction<VoidFunction>) => {
      draft.state.onClose = action.payload;
    },
  },
});
