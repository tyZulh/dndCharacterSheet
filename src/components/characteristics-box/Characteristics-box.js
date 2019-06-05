import React, { Component } from 'react';
import CharacteristicLine from '../characteritic-line/Characteristic-line'
import './Characteristics-box.scss'

class CharacteristicsBox extends Component {
  characteristics = [
    "For",
    "Dex",
    "Con",
    "Int",
    "Sag",
    "Char"
  ]
   
  render() {
    
    return(
      <div className='caracteristicBox'>
        {this.characteristics.map(charcteristic => {
          return (
            <CharacteristicLine data={charcteristic}/>
          )
        })}
      </div>
    )
  }
}

export default CharacteristicsBox;