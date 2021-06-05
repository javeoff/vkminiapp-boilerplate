import { setPrevPage } from '@common/router/utils/setPrevPage';
import { getPrevHistory } from '@common/router/utils/getPrevHistory';
import { history } from '@common/router/history';
import { store } from '@common/redux/store';
import { modalSlice } from '@main/features/Modal/duck/slice';

export const goBack = (): void => {
  // eslint-disable-next-line no-console
  console.log('deleted, history is:', history);

  const currentHistory = getPrevHistory(history);

  history.pop();

  if (currentHistory.type === 'modal') {
    store.dispatch(modalSlice.actions.changeActiveModal(null));
  } else {
    const prevHistory = getPrevHistory(history);

    if (history.length > 0) {
      setPrevPage(prevHistory);
    } else {
      window.history.back();
    }
  }
};
