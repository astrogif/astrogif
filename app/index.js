import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import registerIpcEvents from './ipcEvents';
import App from './containers/app';

import './app.global.css';

const store = configureStore();

registerIpcEvents(store);

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

