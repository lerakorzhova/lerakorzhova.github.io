export default class CalendarGenerator {
  constructor(date) {
    this.currentDate = date;
    this.view = 'month';
    this.monthArr = [];
    this.allEvents = [];
    this.currentWeek = [];
  }

  init() {
    this.currentDay = this.currentDate.getDate();
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.monthArr = this.getMonth(this.monthArr);
    this.currentWeek = this.monthArr.slice(0, 7);
  }

  getMonth(arr, date = this.currentDay, month = this.currentMonth, year = this.currentYear) {
    arr.length = 42;
    arr.fill({
      date: null,
      event: null
    });
    let dayOfMonth = new Date(year, month, 1);
    let dayOfWeek = dayOfMonth.getDay() ? (dayOfMonth.getDay() - 1) : 6;
    let prevDayOfMonth = new Date(year, month, 0);
    //prev month
    for (let i = 0, ind = dayOfWeek - 1; i < dayOfWeek; i++, ind--) {
      arr[ind] = {
        date: prevDayOfMonth.getDate(),
        month: month - 1,
        event: [],
        active: false
      }
      prevDayOfMonth = new Date(year, month - 1, prevDayOfMonth.getDate() - 1);
    }
    //curr month
    do {
      arr[dayOfWeek] = {
        date: dayOfMonth.getDate(),
        month: month,
        event: [],
        active: true,
      };
      dayOfMonth = new Date(year, month, dayOfMonth.getDate() + 1);
      dayOfWeek++;
    } while (dayOfMonth.getDate() !== 1);
    if (dayOfWeek <= 35) {
      arr = arr.slice(0, 35);
      arr.length = 35;
    }
    //next month
    while (dayOfWeek < arr.length) {
      if (this.currentMonth === 11) {
        month = 0;
        year += 1
      }
      let month = this.currentMonth + 1;
      arr[dayOfWeek] = {
        date: dayOfMonth.getDate(),
        month: month,
        event: [],
        active: false
      }
      dayOfMonth = new Date(year, month, dayOfMonth.getDate() + 1);
      dayOfWeek++;
    }
    return arr;
  }
};
