import { connect, ConnectedProps } from 'react-redux';

import { IRootState } from '@common/redux/store';
import {
  actionsLayoutSelector,
  actionsSelector,
  headerSelector,
  onCloseSelector,
  textSelector,
} from '@main/features/Alert/duck/selectors';
import { alertSlice } from '@main/features/Alert/duck/slice';
import { TAction } from '@main/features/Alert/types/TAction';
import { TActionsLayout } from '@main/features/Alert/types/TActionsLayout';

const mapStateToProps = (state: IRootState) => ({
  actions: actionsSelector(state),
  actionsLayout: actionsLayoutSelector(state),
  onClose: onCloseSelector(state),
  header: headerSelector(state),
  text: textSelector(state),
});

const mapDispatchToProps = {
  setActions: (actions: TAction[]) => alertSlice.actions.setActions(actions),
  setActionsLayout: (actionsLayout: TActionsLayout) =>
    alertSlice.actions.setActionsLayout(actionsLayout),
  setHeader: (header: string) => alertSlice.actions.setHeader(header),
  setText: (text: string) => alertSlice.actions.setText(text),
  setOnClose: (onClose: VoidFunction) => alertSlice.actions.setOnClose(onClose),
};

export const withAlertState = connect(mapStateToProps, mapDispatchToProps);

export type IWithAlertState = ConnectedProps<typeof withAlertState>;
