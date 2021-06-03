import { connect, ConnectedProps } from 'react-redux';

import { IRootState } from '@common/redux/store';
import { activePanelSelector } from '@main/features/App/duck/selectors';
import { appSlice } from '@main/features/App/duck/slice';

const mapStateToProps = (state: IRootState) => ({
  activePanel: activePanelSelector(state),
});

const mapDispatchToProps = {
  setActivePanel: (panel: string) => appSlice.actions.setActivePanel(panel),
};

export const withAppState = connect(mapStateToProps, mapDispatchToProps);

export type IWithAppState = ConnectedProps<typeof withAppState>;
