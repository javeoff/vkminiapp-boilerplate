import { connect, ConnectedProps } from 'react-redux';

import { appSlice } from '@main/features/App/duck/slice';
import { modalSlice } from '@main/features/Modal/duck/slice';

const mapDispatchToProps = {
  setActivePanel: (activePanel: string) =>
    appSlice.actions.setActivePanel(activePanel),
  setActiveModal: (activeModal: string | null) =>
    modalSlice.actions.setActiveModal(activeModal),
};

export const withAboutState = connect(null, mapDispatchToProps);

export type IWithAboutState = ConnectedProps<typeof withAboutState>;
