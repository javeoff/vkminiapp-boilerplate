import { Feature } from '@common/enums/Feature';
import { IRootState } from '@common/redux/store';

export type IFeatureState<FeatureName extends Feature> =
  IRootState[FeatureName]['state'];
