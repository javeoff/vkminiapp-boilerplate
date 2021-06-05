import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';

import { store } from '@common/redux/store';
import '@vkontakte/vkui/dist/vkui.css';
import { App } from '@main/features/App/App';
import { Router } from '@common/router/Router';
import { goBack } from '@common/router/utils/goBack';

const Layout = () => {
  useEffect(() => {
    new Router().listen(goBack);
  }, []);

  return (
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
};

ReactDOM.render(<Layout />, document.querySelector('#root'));
