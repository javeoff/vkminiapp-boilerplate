import { connect, ConnectedProps } from 'react-redux';

import { IRootState } from '@common/redux/store';
import { activeModalSelector } from '@main/features/Modal/duck/selectors';
import { modalSlice } from '@main/features/Modal/duck/slice';

const mapStateToProps = (state: IRootState) => ({
  activeModal: activeModalSelector(state),
});

const mapDispatchToProps = {
  setActiveModal: (activeModal: string) =>
    modalSlice.actions.setActiveModal(activeModal),
};

export const withModalState = connect(mapStateToProps, mapDispatchToProps);

export type IWithModalState = ConnectedProps<typeof withModalState>;
