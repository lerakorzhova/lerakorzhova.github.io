import {
  combineReducers
} from 'redux';
import viewReducer from './viewReducer';

const calendarReducer = combineReducers({
  ui: viewReducer,
})

export default calendarReducer;
