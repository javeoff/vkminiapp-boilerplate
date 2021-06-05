import { FC } from 'react';
import { Alert as AlertModal } from '@vkontakte/vkui';

import {
  IWithAlertState,
  withAlertState,
} from '@main/features/Alert/hocs/withAlertState';

const AlertComponent: FC<IWithAlertState> = ({
  actions,
  actionsLayout,
  onClose,
  header,
  text,
}) => (
  <AlertModal
    actions={actions}
    actionsLayout={actionsLayout}
    onClose={onClose}
    header={header}
    text={text}
  />
);

export const Alert = withAlertState(AlertComponent);
