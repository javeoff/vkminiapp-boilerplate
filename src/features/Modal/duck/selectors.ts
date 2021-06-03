import { createSelector } from '@reduxjs/toolkit';

import { IRootState } from '@common/redux/store';
import { Feature } from '@common/enums/Feature';

export const activeModalSelector = createSelector(
  (state: IRootState) => state[Feature.MODAL],
  (modal) => modal.state.activeModal,
);
