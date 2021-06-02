import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from '@main/App';
import { store } from '@common/redux/store';

const Layout = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Layout />, document.querySelector('#root'));
