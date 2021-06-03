import { FC } from 'react';
import { Button, Panel, PanelHeader } from '@vkontakte/vkui';

import {
  IWithAboutState,
  withAboutState,
} from '@pages/About/hocs/withAboutState';

interface IProps {
  id: string;
}

const AboutPageComponent: FC<IProps & IWithAboutState> = ({
  id,
  setActivePanel,
  setActiveModal,
}) => (
  <Panel id={id}>
    <PanelHeader>About page</PanelHeader>
    <Button onClick={() => setActivePanel('index')}>/index</Button>
    <br />
    <Button onClick={() => setActiveModal('error')}>Вызвать ошибку</Button>
  </Panel>
);

export const AboutPage = withAboutState(AboutPageComponent);
