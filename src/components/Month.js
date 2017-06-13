import React from 'react';
import { Day } from './Day';
import { DayOfWeek } from './DayOfWeek';

export class Month extends React.Component {
  render() {
    if (!this.props.monthObject.monthArr) return null;
    let items = this.props.monthObject.monthArr.map((day, ind) => (
      <Day day = { day } />
    ));
    return (
      <div className="month-container container">
        <DayOfWeek />
        <div className="row">
          {items.slice(0, 7)}
        </div>
        <div className="row">
          {items.slice(7, 14)}
        </div>
        <div className="row">
          {items.slice(14, 21) }
        </div>
        <div className="row">
          {items.slice(21, 28) }
        </div>
        <div className="row">
          {items.slice(28, 35) }
        </div>
        <div className="row">
          {items.slice(35, 42) }
        </div>
      </div>
    );
  }
}
