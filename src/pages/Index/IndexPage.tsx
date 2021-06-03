import { FC } from 'react';
import { Button, Panel, PanelHeader } from '@vkontakte/vkui';

import {
  IWithIndexState,
  withIndexState,
} from '@pages/Index/hocs/withIndexState';

interface IProps {
  id: string;
}

const IndexComponent: FC<IWithIndexState & IProps> = ({
  id,
  title,
  setActivePanel,
}) => (
  <Panel id={id}>
    <PanelHeader>{title}</PanelHeader>
    <Button onClick={() => setActivePanel('about')}>/About</Button>
  </Panel>
);

export const IndexPage = withIndexState(IndexComponent);
