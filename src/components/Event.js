import React from 'react';
import { Popup } from './Popup';

export class Event extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isPopupVisible: false,
      }
      this.openPopup = () => {
        this.setState(state => {
          state.isPopupVisible = true;
          return state;
        });
      }
      this.closePopup = () => {
        this.setState(state => {
          state.isPopupVisible = false;
          return state;
        });
      }
    }

    render() {
      let items = this.props.event.map((event, ind, arr) => {
        let component = null;
        if (this.state.isPopupVisible)  component=(<Popup event={event} closePopup={this.closePopup}/>)
        let icon = null;
        if (event.type==='deadline') icon = <i className="fa fa-heartbeat fa-2x" aria-hidden="true"></i>
        if (event.type==='webinar')  icon = <i className="fa fa-desktop  fa-2x" aria-hidden="true"></i>
        if (event.type==='workshop') icon = <i className="fa fa-hand-spock-o fa-2x" aria-hidden="true"></i>
        if (event.type==='lecture')  icon = <i className="fa fa-2x fa-book" aria-hidden="true"></i>
        if (event.type==='event')    icon = <i className="fa fa-users fa-2x" aria-hidden="true"></i>
        if (!event.type) return null;
        let className = "event-container";
        className += (arr.length >= 2) ? (" event-container-xs") : ('');
        return (
          <div>
            <div className = {className} onClick={e => this.openPopup()}>
              {icon}
              <span className='event__title'>
                {(arr.length>=2) ? null : event.title} <br/>
                {(arr.length>=2) ? null : event.start.slice(11,16)}
              </span>
            </div>
            {component}
          </div>
        )
      });
        return (
          <div>
            {items}
          </div>
        )
    }
}
