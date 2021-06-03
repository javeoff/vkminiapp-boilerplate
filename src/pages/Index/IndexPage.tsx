import { FC } from 'react';

import {
  IWithIndexState,
  withIndexState,
} from '@pages/Index/hocs/withIndexState';

interface IProps {
  id: string;
}

const IndexComponent: FC<IWithIndexState & IProps> = ({
  title,
  setActivePanel,
}) => (
  <div>
    <div>{title}</div>
    <button type='button' onClick={() => setActivePanel('about')}>
      /About
    </button>
  </div>
);

export const IndexPage = withIndexState(IndexComponent);
