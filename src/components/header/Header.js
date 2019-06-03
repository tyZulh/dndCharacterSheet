import React, { Component } from 'react'
import './Header.scss';

class Header extends Component {
  state = {
    characterName: 'Einkil',
    classes: '',
    level: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    edit: false,
  }

  editHeader = _=> {
    this.setState({edit : !this.state.edit})
  }

  render() {
    return (
      <div className='header'>
        <div>
          <div className='cell'>
            <span>
              Personnage : 
            </span>

            <span>
              {this.state.characterName}
            </span>

            <input className={this.state.edit ? 'display' : 'notDisplayed'}/>
          </div>

          <div className='cell'>
            <span>
              Classes : 
            </span>

            <span>
              {this.state.classes} 
            </span>

            <input className={this.state.edit ? 'display' : 'notDisplayed'}/>
          </div>

          <div className='cell'>
            <span>
              Niveau : 
            </span>
            
            <span>
              {this.state.level}
            </span>

            <input className={this.state.edit ? 'display' : 'notDisplayed'}/>
          </div>

          <div className='cell'>
            <span>
              Age : 
            </span>
            <span>
              {this.state.age}
            </span>

            <input className={this.state.edit ? 'display' : 'notDisplayed'}/>
          </div>

          <div className='cell'>
            <span>
              Taille : 
            </span>

            <span>
              {this.state.height}
            </span>

            <input className={this.state.edit ? 'display' : 'notDisplayed'}/>
          </div>

          <div className='cell'>
            <span>
              Poid :
            </span>

            <span>
              {this.state.weight}
            </span>

            <input className={this.state.edit ? 'display' : 'notDisplayed'}/>
          </div>

          <div className='cell'>
            <span>
              Genre : 
            </span>

            <span className={this.state.edit ? 'notDisplayed' : 'display'}>
              {this.state.gender}
            </span>

            <input className={this.state.edit ? 'display' : 'notDisplayed'}/>
          </div>
        </div>

        <button
          className='editButton'
          onClick={this.editHeader}
        >edit</button>
      </div>
    )
  }
}

export default Header;
