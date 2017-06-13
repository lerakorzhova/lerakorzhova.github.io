import React from 'react';

export class DayOfWeek extends React.PureComponent {
  render(){
    let days = null;
    let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    if (!this.props.day) {
      days = daysOfWeek.map(day => {
        return (
          <div className="dayOfWeek-container text-center">
            <h4>{day}</h4>
          </div>
        );
      })
    }
    else {
      days = this.props.day.currentWeek.map((day, ind) =>
        <div className="dayOfWeek-container text-center">
          <h4>
            {daysOfWeek[ind]}
            {' '+day.date+'/'}
            {(day.month >= 9) ? (day.month + 1) : ('0' + (day.month + 1))}
          </h4>
        </div>
      )
    }
    return (
      <div className='row'>
        {days}
      </div>
    )
  }
}
