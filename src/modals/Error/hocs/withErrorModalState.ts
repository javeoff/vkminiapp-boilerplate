import { connect, ConnectedProps } from 'react-redux';

import { modalSlice } from '@main/features/Modal/duck/slice';
import { appSlice } from '@main/features/App/duck/slice';

const mapDispatchToProps = {
  setActivePanel: (activePanel: string) =>
    appSlice.actions.setActivePanel(activePanel),
  setActiveModal: (activeModal: string | null) =>
    modalSlice.actions.setActiveModal(activeModal),
};

export const withErrorModalState = connect(null, mapDispatchToProps);

export type IWithErrorModalState = ConnectedProps<typeof withErrorModalState>;
