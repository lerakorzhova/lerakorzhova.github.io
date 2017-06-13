import Immutable from 'immutable';
import { INIT_CALENDAR_VIEW, CHANGE_PAGE, INIT_CALENDAR_EVENTS, CHANGE_VIEW } from '../constants/actionTypes';
import CalendarGenerator from '../CalendarGenerator';

const initialState = Immutable.Map({
  view: 'month'
});

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_CALENDAR_VIEW:
      {
        const newState = Immutable.Map(action.monthObject);
        return newState;
      }
    case CHANGE_PAGE:
      {
        let newState;
        if (action.currentWeek) {
          newState = state.set('currentWeek', action.currentWeek);
        } else {
          newState = Immutable.Map(action.monthObject);
        }
        return newState;
      }
    case CHANGE_VIEW:
      {
        const newState = state.set('view', action.payload);
        return newState;
      }
    default:
      return state;
  }
}
export default viewReducer;
