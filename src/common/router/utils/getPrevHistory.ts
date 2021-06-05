import { THistoryList } from '@common/router/types/THistoryList';
import { THistory } from '@common/router/types/THistory';

export const getPrevHistory = (history: THistoryList): THistory =>
  history[history.length - 1];
