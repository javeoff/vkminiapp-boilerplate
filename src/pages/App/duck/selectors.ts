import { createSelector } from '@reduxjs/toolkit';

import { IRootState } from '@common/redux/store';
import { Feature } from '@common/enums/Feature';

export const activePanelSelector = createSelector(
  (state: IRootState) => state[Feature.APP],
  (app) => app.state.activePanel,
);
