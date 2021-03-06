import { connect, ConnectedProps } from 'react-redux';

import { IRootState } from '@common/redux/store';
import { activePanelSelector } from '@main/features/App/duck/selectors';
import { appSlice } from '@main/features/App/duck/slice';
import { Pages } from '@main/features/App/enums/Pages';
import { isActiveAlertSelector } from '@common/duck/selectors';

const mapStateToProps = (state: IRootState) => ({
  activePanel: activePanelSelector(state),
  isActiveAlert: isActiveAlertSelector(state),
});

const mapDispatchToProps = {
  setActivePanel: (panel: Pages) => appSlice.actions.setActivePanel(panel),
};

export const withAppState = connect(mapStateToProps, mapDispatchToProps);

export type IWithAppState = ConnectedProps<typeof withAppState>;
