import { FC } from 'react';

import {
  IWithIndexState,
  withIndexState,
} from '@pages/Index/hocs/withIndexState';

const IndexComponent: FC<IWithIndexState> = ({ title }) => <div>{title}</div>;

export const IndexPage = withIndexState(IndexComponent);
