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
  }

  handleChange = event => {
    this.setState({value : event.target.value})
    this.headerItemData.value = event.target.value
    this.setState({headerItemData : this.headerItemData})    
  }

  displayEdit = _ => {
    this.setState({edit : !this.state.edit})
  }

  render() {
    return(
      <div className='cell'>
        <span className='cellTitle'>
          {this.props.title} : 
        </span>

        <span 
          className={this.state.edit ? 'notDisplayed' : 'cellData'} 
          onClick={this.displayEdit}
        >
          {this.state.value}
        </span>

        <input
          className={this.state.edit ? 'cellInput' : 'notDisplayed'} 
          onChange={this.handleChange}
          placeholder={this.state.value}
        />
        <button 
          className={this.state.edit ? 'editButton' : 'notDisplayed'}
          onClick={this.displayEdit}
        >+</button>
      </div>
    )
  }
}
export default HeaderItem
