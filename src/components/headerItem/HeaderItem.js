import React, { Component } from 'react';
import './HeaderItem.scss';

class HeaderItem extends Component {
  state = {
    edit : false,
    headerItemData : {},
  }
  
  headerItemData = {
    properties : this.props.title,
    value : ''
  }

  componentDidMount() {
    if (!this.state.headerItemData.value) {
      this.setState({ edit : true })
    }
    console.log(this.state);       
  }

  handleChange = event => {
    this.setState({value : event.target.value})
    this.headerItemData.value = event.target.value
    this.setState({headerItemData : this.headerItemData})
    console.log(this.state);
    
  }

  displayEdit = _ => {
    console.log(this.state);
    
    this.setState({edit : !this.state.edit})
  }

  render() {
    return(
      <div className='cell'>
        <span>
          {this.props.title} :  
        </span>

        <span 
          // className={this.state.edit ? 'notDisplayed' : 'display'}
          onClick={this.displayEdit}
        >
          {this.state.value}
        </span>

        <input
          className={this.state.edit ? 'display' : 'notDisplayed'}
          onChange={this.handleChange}
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
