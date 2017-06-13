import React from 'react';
import {connect} from 'react-redux';
import { CHANGE_VIEW, CHANGE_PAGE, INIT_CALENDAR_VIEW } from '../constants/actionTypes';
import { NavBar } from '../components/NavBar';
import { Month } from '../components/Month';
import { Week } from '../components/Week';
import store from '../store';

class Calendar extends React.Component {
  componentWillMount(){
    store.dispatch({
      type: 'INIT_CALENDAR_EVENTS'
    });
  }
  render() {
    let component = null;
    let state = store.getState().ui.toObject();
    if (state.view === 'month') component = <Month monthObject={this.props.monthObject} />
    if (state.view === 'week')  component = <Week monthObject={this.props.monthObject} />;
    return (
      <div className = "rs-calendar container">
        <NavBar monthObject = {this.props.monthObject} changeView = {this.props.changeView} changePage = {this.props.changePage}/>
        {component}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    monthObject: state.ui.toObject(),
  }
}

function mapActionsToProps(dispatch) {
  return {
    changeView: text => dispatch({
      type: CHANGE_VIEW,
      payload: text
    }),
    changePage: (text) => dispatch({
      type: CHANGE_PAGE,
      payload: text
    })
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Calendar);
