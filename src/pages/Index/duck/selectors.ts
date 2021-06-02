import { createSelector } from '@reduxjs/toolkit';

import { Feature } from '@common/enums/Feature';
import { IRootState } from '@common/redux/store';

export const titleSelector = createSelector(
  (state: IRootState) => state[Feature.INDEX],
  (index) => index.state.title,
);
