import { THistoryList } from '@common/router/types/THistoryList';
import { THistoryItem } from '@common/router/types/THistoryItem';
import { THistoryItemName } from '@common/router/types/THistoryItemName';
import { history } from '@common/router/history';

export class Router {
  public pushHistory(type: THistoryItem, name: THistoryItemName): void {
    // eslint-disable-next-line no-console
    console.log('push history is:', history);

    history.push({ type, name });
    window.history.pushState('', '', null);
  }

  public popHistory(): void {
    history.pop();
  }

  public deleteLastHistory(): void {
    // eslint-disable-next-line no-console
    console.log('deleted, history is:', history);
    history.pop();
  }

  protected static get history(): THistoryList {
    return history;
  }

  public listen(goBackFn: VoidFunction): void {
    window.addEventListener('popstate', goBackFn);
  }
}
