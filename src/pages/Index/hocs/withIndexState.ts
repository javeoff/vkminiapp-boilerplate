import { connect, ConnectedProps } from 'react-redux';

import { IRootState } from '@main/common/redux/store';
import { titleSelector } from '@pages/Index/duck/selectors';
import { indexSlice } from '@pages/Index/duck/slice';

const mapStateToProps = (state: IRootState) => ({
  title: titleSelector(state),
});

const mapDispatchToProps = {
  setTitle: (title: string) => indexSlice.actions.setTitle(title),
};

export const withIndexState = connect(mapStateToProps, mapDispatchToProps);

export type IWithIndexState = ConnectedProps<typeof withIndexState>;
