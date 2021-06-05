import { createSelector } from '@reduxjs/toolkit';

import { getFeatureSelector } from '@common/redux/selectors';

export const commonSelector = getFeatureSelector('common');

export const isActiveAlertSelector = createSelector(
  commonSelector,
  ({ isActiveAlert }) => isActiveAlert,
);
