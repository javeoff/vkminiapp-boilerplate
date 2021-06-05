import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { THistoryList } from '@common/router/types/THistoryList';
import { Pages } from '@main/features/App/enums/Pages';
import { THistory } from '@common/router/types/THistory';
import { getFilteredLastHistory } from '@common/duck/utils/getLastHistory';
import { goBack } from '@common/duck/utils/goBack';

interface ICommon {
  history: THistoryList;
}

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    history: [{ type: 'panel', name: Pages.INDEX }],
  } as ICommon,
  reducers: {
    pushHistory: (draft, action: PayloadAction<THistory>) => {
      draft.history = [...draft.history, action.payload];
      window.history.pushState('', '', null);
    },
    popHistory: (draft) => {
      draft.history = getFilteredLastHistory(draft.history);
    },
    goBack: (draft) => {
      commonSlice.actions.popHistory();
      goBack(draft.history);
    },
  },
});
