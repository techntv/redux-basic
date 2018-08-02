import React from 'react';
import ReactDOM from 'react-dom';

import App from './view/App';
import configStore from './store/configStore';
import { Provider } from 'react-redux';

const store = configStore();

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 app);
