import { FC } from 'react';
import { View } from '@vkontakte/vkui';

import { IndexPage } from '@pages/Index/IndexPage';
import {
  IWithAppState,
  withAppState,
} from '@main/features/App/hocs/withAppState';
import { AboutPage } from '@pages/About/AboutPage';
import { Modal } from '@main/features/Modal/Modal';
import { Pages } from '@main/features/App/enums/Pages';
import { Alert } from '@main/features/Alert/Alert';

const AppComponent: FC<IWithAppState> = ({ activePanel, isActiveAlert }) => {
  const modal = <Modal />;
  const alert = isActiveAlert ? <Alert /> : null;

  return (
    <div>
      {alert}

      <View activePanel={activePanel} modal={modal}>
        <IndexPage id={Pages.INDEX} />
        <AboutPage id={Pages.ABOUT} />
      </View>
    </div>
  );
};

export const App = withAppState(AppComponent);
