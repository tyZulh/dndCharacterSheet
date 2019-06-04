import React, { Component } from 'react';

class CharacteristicLine extends Component {
  render() {
    return (
      <div>
        <div className="characteristicName">
          {characteristicLine} = 
        </div>

        <form>
          <div className="characteristicTotalValue">
            <input type= "text"/>
          </div>

          <div className="characteristicBaseValue">
            <input type= "text"/>
          </div>

          <div className="alterationBonus">
            <input type= "text"/>
          </div>

          <div className="variousBonus">
            <input type= "text"/>
          </div>

          <div className="variousMalus">
            <input type= "text"/>
          </div>

          <div className="characteristicModificator">
            <input type= "text"/>
          </div>
        </form>
      </div>
    )
  }
}

export default CharacteristicLine;
