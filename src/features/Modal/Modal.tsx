import { ModalRoot } from '@vkontakte/vkui';
import { FC } from 'react';

import { ErrorModal } from '@main/modals/Error/ErrorModal';
import {
  IWithModalState,
  withModalState,
} from '@main/features/Modal/hocs/withModalState';

interface IProps {
  activeModal: string | null;
}

const ModalComponent: FC<IProps & IWithModalState> = ({ activeModal }) => (
  <ModalRoot activeModal={activeModal}>
    <ErrorModal id='error' />
  </ModalRoot>
);

export const Modal = withModalState(ModalComponent);
