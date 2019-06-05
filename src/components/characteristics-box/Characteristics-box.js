import React, { Component } from 'react';
import CharacteristicLine from '../characteritic-line/Characteristic-line'

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
      <div>
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