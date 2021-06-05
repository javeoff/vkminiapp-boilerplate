import { THistoryItem } from '@common/router/types/THistoryItem';
import { THistoryItemName } from '@common/router/types/THistoryItemName';

export type THistory = {
  type: THistoryItem;
  name: THistoryItemName;
};
