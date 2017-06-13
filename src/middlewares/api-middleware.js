import { CHANGE_PAGE, INIT_CALENDAR_EVENTS, INIT_CALENDAR_VIEW } from '../constants/actionTypes';

export default function api(store) {
  return function(next) {
    return function(action) {
      switch (action.type) {
        case INIT_CALENDAR_EVENTS:
          {
            fetch(`http://128.199.53.150/events`)
            .then((data) => {
              return data.json();
            })
            .then((data) => {
              store.dispatch({
                type: INIT_CALENDAR_VIEW,
                allEvents: data,
              })
            });
            return next(action);
          }
        case CHANGE_PAGE:
          {
            return next(action);
          }
        default:
          return next(action);
      }
    }
  }
}
