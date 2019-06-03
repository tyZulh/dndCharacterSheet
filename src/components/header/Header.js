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
        <div className={this.state.edit ? 'headerForm' : 'notDisplayed'}>
          <form>
            <label className='characterName'>
              Personnage :
              <input/>
            </label>

            <label className='characterClasses'>
              Classe :
              <input/>
            </label>

            <label className='characterLevel'>
              Niveaux :
              <input/>
            </label>

            <label className='characterAge'>
              Age :
              <input/>
            </label>

            <label className='characterHeight'>
              Taille :
              <input/>
            </label>

            <label className='character'>
              Poid :
              <input/>
            </label>

            <label className='gender'>
              Genre :
              <input/>
            </label>

            <label className='height'>
              Catégorie de taille :
              <input/>
            </label>
          </form>
        </div>

        <div className={this.state.edit ? 'notDisplayed' : 'headerDiplay'}>
          <div className='cell'>
            Personnage : {this.state.characterName}
          </div>

          <div className='cell'>
            Classes : {this.state.classes} 
          </div>

          <div className='cell'>
            Niveau : {this.state.level}
          </div>

          <div className='cell'>
            Age : {this.state.age}
          </div>

          <div className='cell'>
            Taille : {this.state.height}
          </div>

          <div className='cell'>
            Poid : {this.state.weight}
          </div>

          <div className='cell'>
            Genre {this.state.gender}
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
