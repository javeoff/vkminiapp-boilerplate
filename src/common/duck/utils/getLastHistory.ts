import { THistoryList } from '@common/router/types/THistoryList';

export const getFilteredLastHistory = (
  historyList: THistoryList,
): THistoryList =>
  historyList.filter((item, idx) => idx !== historyList.length - 1);
