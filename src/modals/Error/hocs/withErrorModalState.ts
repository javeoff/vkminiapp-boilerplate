import { connect, ConnectedProps } from 'react-redux';

import { modalSlice } from '@main/features/Modal/duck/slice';
import { appSlice } from '@main/features/App/duck/slice';
import { TModal } from '@main/features/Modal/types/TModal';
import { Pages } from '@main/features/App/enums/Pages';

const mapDispatchToProps = {
  setActivePanel: (activePanel: Pages) =>
    appSlice.actions.setActivePanel(activePanel),
  setActiveModal: (activeModal: TModal) =>
    modalSlice.actions.setActiveModal(activeModal),
};

export const withErrorModalState = connect(null, mapDispatchToProps);

export type IWithErrorModalState = ConnectedProps<typeof withErrorModalState>;
