import { FC } from 'react';
import { View } from '@vkontakte/vkui';

import { IndexPage } from '@pages/Index/IndexPage';
import {
  IWithAppState,
  withAppState,
} from '@main/features/App/hocs/withAppState';
import { AboutPage } from '@pages/About/AboutPage';
import { Modal } from '@main/features/Modal/Modal';

const AppComponent: FC<IWithAppState> = ({ activePanel }) => {
  const modal = <Modal />;

  return (
    <div>
      <View activePanel={activePanel} modal={modal}>
        <IndexPage id='index' />
        <AboutPage id='about' />
      </View>
    </div>
  );
};

export const App = withAppState(AppComponent);
