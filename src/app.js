import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Calendar from './containers/Calendar';
import store from './store';

render(
  <Provider store={store}>
    <Calendar />
  </Provider>,
  document.querySelector('#root')
);
