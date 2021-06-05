import { createSelector } from '@reduxjs/toolkit';

import { IRootState } from '@common/redux/store';
import { Feature } from '@common/enums/Feature';
import { IFeatureState } from '@common/redux/types/IFeatureState';

export const getFeatureSelector =
  <FeatureName extends Feature | 'common'>(feature: FeatureName) =>
  (state: IRootState): IRootState[FeatureName] =>
    state[feature];

export const getFeatureStateSelector = <FeatureName extends Feature>(
  feature: Feature,
): ((state: IRootState) => IFeatureState<FeatureName>) =>
  createSelector(getFeatureSelector(feature), (state) => state.state);
