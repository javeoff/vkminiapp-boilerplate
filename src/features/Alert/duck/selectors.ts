import { createSelector } from '@reduxjs/toolkit';

import { IRootState } from '@common/redux/store';
import { Feature } from '@common/enums/Feature';

export const actionsLayoutSelector = createSelector(
  (state: IRootState) => state[Feature.ALERT],
  (alert) => alert.state.actionsLayout,
);

export const onCloseSelector = createSelector(
  (state: IRootState) => state[Feature.ALERT],
  (alert) => alert.state.onClose,
);

export const headerSelector = createSelector(
  (state: IRootState) => state[Feature.ALERT],
  (alert) => alert.state.header,
);

export const textSelector = createSelector(
  (state: IRootState) => state[Feature.ALERT],
  (alert) => alert.state.text,
);

export const actionsSelector = createSelector(
  (state: IRootState) => state[Feature.ALERT],
  (alert) => alert.state.actions,
);
