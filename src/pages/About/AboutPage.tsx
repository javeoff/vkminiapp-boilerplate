import { FC } from 'react';
import { Button, Panel, PanelHeader } from '@vkontakte/vkui';

import {
  IWithAboutState,
  withAboutState,
} from '@pages/About/hocs/withAboutState';
import { Modals } from '@main/features/Modal/enums/Modals';
import { Pages } from '@main/features/App/enums/Pages';

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
    <Button onClick={() => setActivePanel(Pages.INDEX)}>/index</Button>
    <br />
    <Button onClick={() => setActiveModal(Modals.ERROR)}>Вызвать ошибку</Button>
  </Panel>
);

export const AboutPage = withAboutState(AboutPageComponent);
