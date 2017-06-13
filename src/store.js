import { createStore, applyMiddleware } from 'redux';
import calendarReducer from './reducers/calendarReducer';
import view from './middlewares/view-middleware';
import api from './middlewares/api-middleware';

const store = createStore(calendarReducer, applyMiddleware(
  api,
  view,
));

export default store;
