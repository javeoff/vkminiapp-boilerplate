import { THistoryList } from '@common/router/types/THistoryList';
import { store } from '@common/redux/store';
import { commonSlice } from '@common/duck/slice';
import { THistoryItem } from '@common/router/types/THistoryItem';
import { THistoryItemName } from '@common/router/types/THistoryItemName';

export class Router {
  public goBack(): void {
    store.dispatch(commonSlice.actions.goBack());
  }

  public pushHistory(type: THistoryItem, name: THistoryItemName): void {
    store.dispatch(commonSlice.actions.pushHistory({ type, name }));
  }

  protected static get history(): THistoryList {
    return store.getState().common.history;
  }

  public listen(): void {
    window.addEventListener('popstate', this.goBack);
  }
}
