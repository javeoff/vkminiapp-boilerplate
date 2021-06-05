import { connect, ConnectedProps } from 'react-redux';

import { appSlice } from '@main/features/App/duck/slice';
import { modalSlice } from '@main/features/Modal/duck/slice';
import { TModal } from '@main/features/Modal/types/TModal';
import { Pages } from '@main/features/App/enums/Pages';

const mapDispatchToProps = {
  setActivePanel: (activePanel: Pages) =>
    appSlice.actions.setActivePanel(activePanel),
  setActiveModal: (activeModal: TModal) =>
    modalSlice.actions.setActiveModal(activeModal),
};

export const withAboutState = connect(null, mapDispatchToProps);

export type IWithAboutState = ConnectedProps<typeof withAboutState>;
