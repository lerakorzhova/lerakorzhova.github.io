import { CHANGE_PAGE, INIT_CALENDAR_VIEW, INIT_CALENDAR_EVENTS} from '../constants/actionTypes';
import CalendarGenerator from '../CalendarGenerator';

export default function view(store) {
  return function(next) {
    return function(action) {
      switch (action.type) {
        case INIT_CALENDAR_VIEW:
          {
            let currentMonth = initCalendar(action, new Date());
            return next(action);
          }
        case CHANGE_PAGE:
          {
            let state = store.getState().ui.toObject();
            if (state.view === 'month') {
              if (action.payload === 'prev') var month = state.currentMonth - 1;
              if (action.payload === 'next') var month = state.currentMonth + 1;
              let nextDate = new Date(state.currentYear, month, state.currentDay);
              let currentMonth = initCalendar(action, nextDate, state.allEvents);
            }

            if (state.view === 'week') {
              let currentMonth = state.monthArr;
              let currentWeek = state.currentWeek;
              let ind = 0;
              for (let i in currentMonth) {
                if (currentWeek[0].date == currentMonth[i].date) {
                  ind = +i;
                  break;
                }
              }
              if ((currentMonth.length === 35 && ind == 21 || currentMonth.length === 42 && ind == 28) && action.payload === 'next') {
                let nextDate = new Date(state.currentYear, state.currentMonth + 1, state.currentDay);
                let currentMonth = initCalendar(action, nextDate, state.allEvents);
                action.monthObject.view = 'week';
                return next(action);
              }
              if ((ind == 7 || ind == 0) && action.payload === 'prev') {
                let nextDate;
                if (state.currentMonth === 11) {
                  nextDate = new Date(state.currentYear - 1, 0, state.currentDay);
                } else nextDate = new Date(state.currentYear, state.currentMonth - 1, state.currentDay);
                let currentMonth = initCalendar(action, nextDate, state.allEvents);
                action.monthObject.view = 'week';
                action.monthObject.currentWeek = action.monthObject.monthArr.slice(action.monthObject.monthArr.length - 7, action.monthObject.monthArr.length);
                return next(action);
              }
              if (action.payload === 'prev') ind = ind - 7;
              if (action.payload === 'next') ind = ind + 7;
              currentWeek = currentMonth.slice(ind, ind + 7)
              action.currentWeek = currentWeek;
            };
            return next(action);
          }
        default:
          return next(action);
      }
    }
  }
}

function initCalendar(action, date, events) {
  let allEvents = action.allEvents || [...events];
  let currentMonth = new CalendarGenerator(date);
  currentMonth.init();
  let curEvents = allEvents.filter((event) => {
    let a = new Date(event.start);
    return (currentMonth.currentMonth === a.getMonth() && currentMonth.currentYear === a.getFullYear());
  })
  for (let i in curEvents) {
    let a = new Date(curEvents[i].start);
    for (let j = 0; j < currentMonth.monthArr.length; j++) {
      if (currentMonth.monthArr[j].date === a.getDate() && currentMonth.monthArr[j].month === a.getMonth()) {
        currentMonth.monthArr[j].event.push(curEvents[i]);
      }
    }
  }
  currentMonth.allEvents = [...allEvents];
  currentMonth.currentWeek = currentMonth.monthArr.slice(0, 7);
  action.monthObject = currentMonth;
  return currentMonth;
}
