import React from 'react';

export class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
  }
  render(){
    if (!this.props.monthObject.currentMonth && this.props.monthObject.currentMonth !== 0) return null;
    return(
      <div id='navigation-container'>
        <div className='row view-configuration'>
          <a className="btn btn-default" id="month" href="#"  onClick={() => this.props.changeView('month')}>Month</a>
          <a className="btn btn-default" id="week" href="#"  onClick={() => this.props.changeView('week')}>Week</a>
        </div>
        <div className='text-center row'>
          <h3><a className="btn-sm btn-default" id="prev" href="#" onClick={() => this.props.changePage('prev')}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <span className='current-date'>
            {this.months[this.props.monthObject.currentMonth]} {this.props.monthObject.currentYear}
          </span>
          <a className="btn-sm btn-default" id="next" href="#" onClick={() => this.props.changePage('next')}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
          </h3>
        </div>
      </div>
    )
  }
}
