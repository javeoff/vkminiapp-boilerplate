import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from '@pages/App/App';
import { store } from '@common/redux/store';

const Layout = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Layout />, document.querySelector('#root'));
