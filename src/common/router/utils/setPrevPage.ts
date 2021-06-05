import { Pages } from '@main/features/App/enums/Pages';
import { appSlice } from '@main/features/App/duck/slice';
import { TModal } from '@main/features/Modal/types/TModal';
import { modalSlice } from '@main/features/Modal/duck/slice';
import { store } from '@common/redux/store';
import { THistory } from '@common/router/types/THistory';

export const setPrevPage = (prevHistory: THistory): void => {
  const reducers = {
    changeActivePanel: (panel: Pages) =>
      appSlice.actions.changeActivePanel(panel),
    changeActiveModal: (activeModal: TModal) =>
      modalSlice.actions.changeActiveModal(activeModal),
  };

  switch (prevHistory.type) {
    case 'panel':
      store.dispatch(reducers.changeActivePanel(prevHistory.name as Pages));
      break;
    case 'modal':
      store.dispatch(reducers.changeActiveModal(prevHistory.name as TModal));
      break;
    default:
  }
};
