import { Button, ModalCard } from '@vkontakte/vkui';
import { FC } from 'react';

import {
  IWithErrorModalState,
  withErrorModalState,
} from '@main/modals/Error/hocs/withErrorModalState';
import { Pages } from '@main/features/App/enums/Pages';

interface IProps {
  id: string;
}

const ErrorModalComponent: FC<IProps & IWithErrorModalState> = ({
  id,
  setActiveModal,
  setActivePanel,
}) => {
  const onClose = (): void => {
    setActiveModal(null);
  };

  return (
    <ModalCard id={id} onClose={onClose}>
      <div>123</div>
      <Button onClick={() => setActivePanel(Pages.INDEX)}>
        Открыть главную страницу
      </Button>
      <Button onClick={onClose}>Close</Button>
    </ModalCard>
  );
};

export const ErrorModal = withErrorModalState(ErrorModalComponent);
