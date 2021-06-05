import { Pages } from '@main/features/App/enums/Pages';
import { appSlice } from '@main/features/App/duck/slice';
import { TModal } from '@main/features/Modal/types/TModal';
import { modalSlice } from '@main/features/Modal/duck/slice';
import { store } from '@common/redux/store';
import { THistoryList } from '@common/router/types/THistoryList';

export const goBack = (history: THistoryList): void => {
  const prevPage = history[history.length - 1];

  const reducers = {
    changeActivePanel: (panel: Pages) =>
      appSlice.actions.changeActivePanel(panel),
    changeActiveModal: (activeModal: TModal) =>
      modalSlice.actions.changeActiveModal(activeModal),
  };

  switch (prevPage.type) {
    case 'panel':
      store.dispatch(reducers.changeActivePanel(prevPage.name as Pages));
      break;
    case 'modal':
      store.dispatch(reducers.changeActiveModal(prevPage.name as TModal));
      break;
    default:
  }
};
