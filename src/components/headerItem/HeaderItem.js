import React, { Component } from 'react';
import './HeaderItem.scss';

class HeaderItem extends Component {
  state = {
    value : 'poil',
    edit : true
  }

  displayEdit = _=> {
    this.setState({edit : !this.state.edit})
  }

  render(){
    return(
      <div className='cell'>
        <span>
          {this.props.title} :  
        </span>

        <span 
          className={this.state.edit ? 'notDisplayed' : 'display'}
          onClick={this.displayEdit}
        >
          {this.state.value}
        </span>

        <input
          className={this.state.edit ? 'display' : 'notDisplayed'}
          onSubmit={this.displayEdit}
          placeholder={this.state.value}
        />
        <button 
          className={this.state.edit ? 'display' : 'notDisplayed'}
          onClick={this.displayEdit}
        ></button>
      </div>
    )
  }
}
export default HeaderItem
