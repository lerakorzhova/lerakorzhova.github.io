import React from 'react';

export class Popup extends React.Component {
  constructor(props){
    super(props);
    this.close=()=>{
      this.props.closePopup();
    }
  }
  render() {
    let resources=this.props.event.resources.map(el => {
      return (
        <div className='resources-container'>
          <a href={el.resource}>{el.type}</a>
          <div className="resource-description">
            {el.description}
          </div>
        </div>
      )
    })
    return (
      <div className='popup-container' id='myModal'>
        <div className='popup-content'>
          <i className="fa fa-times fa-2x" aria-hidden="true" onClick={this.close}></i>
          <h3>{this.props.event.title}</h3>
          <div className='popup-descriprion'>
            {this.props.event.description}
          </div>
          {resources}
        </div>
      </div>
    )
  }
}
