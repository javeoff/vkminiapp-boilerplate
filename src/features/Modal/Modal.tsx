import { ModalRoot } from '@vkontakte/vkui';
import { FC } from 'react';

import { ErrorModal } from '@main/modals/Error/ErrorModal';
import {
  IWithModalState,
  withModalState,
} from '@main/features/Modal/hocs/withModalState';
import { Modals } from '@main/features/Modal/enums/Modals';
import { TModal } from '@main/features/Modal/types/TModal';

interface IProps {
  activeModal: TModal;
}

const ModalComponent: FC<IProps & IWithModalState> = ({ activeModal }) => (
  <ModalRoot activeModal={activeModal}>
    <ErrorModal id={Modals.ERROR} />
  </ModalRoot>
);

export const Modal = withModalState(ModalComponent);
