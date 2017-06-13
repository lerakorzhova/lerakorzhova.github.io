import React from 'react';
import { Event } from './Event';

export class Day extends React.Component {
    render() {
      let className = this.props.day.active ? 'day-container active' : 'day-container';
      if (this.props.day.event[0]) {
        switch (this.props.day.event[0].type) {
          case 'webinar': className+=' event webinar'; break;
          case 'lecture': className+=' event lecture'; break;
          case 'workshop': className+=' event workshop'; break;
          case 'deadline': className+=' event deadline'; break;
        }
        if (!!this.props.day.event[0].type) className += ' event';
      }
      return (
        <div className={className}>
          {this.props.day.date}
          <Event event={this.props.day.event}/>
        </div>
      )
    }
}
