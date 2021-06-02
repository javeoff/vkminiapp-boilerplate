import { FC } from 'react';
import { View } from '@vkontakte/vkui';

import { IndexPage } from '@pages/Index/IndexPage';
import { IWithAppState, withAppState } from '@pages/App/hocs/withAppState';

const AppComponent: FC<IWithAppState> = ({ activePanel, setActivePanel }) => (
  <div>
    <View activePanel={activePanel}>
      <IndexPage id='index' />
    </View>

    <br />
    <button onClick={() => setActivePanel('index')}>/Index</button>
  </div>
);

export const App = withAppState(AppComponent);
