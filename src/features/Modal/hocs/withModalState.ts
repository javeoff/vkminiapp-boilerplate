import { connect, ConnectedProps } from 'react-redux';

import { IRootState } from '@common/redux/store';
import { activeModalSelector } from '@main/features/Modal/duck/selectors';
import { modalSlice } from '@main/features/Modal/duck/slice';
import { TModal } from '@main/features/Modal/types/TModal';

const mapStateToProps = (state: IRootState) => ({
  activeModal: activeModalSelector(state),
});

const mapDispatchToProps = {
  setActiveModal: (activeModal: TModal) =>
    modalSlice.actions.setActiveModal(activeModal),
};

export const withModalState = connect(mapStateToProps, mapDispatchToProps);

export type IWithModalState = ConnectedProps<typeof withModalState>;
