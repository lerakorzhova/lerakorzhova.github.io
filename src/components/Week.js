import React from 'react';
import { DayOfWeek } from './DayOfWeek';
import { Day } from './Day';

export class Week extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.monthObject.currentWeek[0] !== this.props.monthObject.currentWeek[0];
  }
  render() {
    let week = this.props.monthObject.currentWeek.map(day =>
      <Day day = {day} />
    )
    return (
      <div className='container week-container'>
        <DayOfWeek day={this.props.monthObject}/>
        <div className="row">
          {week}
        </div>
      </div>
    );
  }
}
