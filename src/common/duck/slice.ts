import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICommon {
  isActiveAlert: boolean;
}

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isActiveAlert: false,
  } as ICommon,
  reducers: {
    setIsActiveAlert: (draft, action: PayloadAction<boolean>) => {
      draft.isActiveAlert = action.payload;
    },
  },
});
