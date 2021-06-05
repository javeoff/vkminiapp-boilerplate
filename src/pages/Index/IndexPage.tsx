import { FC } from 'react';
import { Button, Panel, PanelHeader } from '@vkontakte/vkui';

import {
  IWithIndexState,
  withIndexState,
} from '@pages/Index/hocs/withIndexState';
import { Pages } from '@main/features/App/enums/Pages';

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
    <Button onClick={() => setActivePanel(Pages.ABOUT)}>/About</Button>
  </Panel>
);

export const IndexPage = withIndexState(IndexComponent);
