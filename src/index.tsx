import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';

import { store } from '@common/redux/store';
import '@vkontakte/vkui/dist/vkui.css';
import { App } from '@main/features/App/App';

const Layout = () => (
  <Provider store={store}>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </Provider>
);

ReactDOM.render(<Layout />, document.querySelector('#root'));
