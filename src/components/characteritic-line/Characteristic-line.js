import React, { Component } from 'react';

class CharacteristicLine extends Component {
  state = {
    totalValue : 0,
    initialValue : 12,
    alterationBonus : 2,
    variousBonus : 0,
    variousMalus : 1,
    modificator : 0,
  }
  
  calculateCharacteristic = _=> {
    return this.state.initialValue + this.state.alterationBonus + this.state.variousBonus - this.state.variousMalus
  }

  render() {
    return (
      <div>
        <div className="characteristicName">
          {this.props.data} =
        </div>

        <form>
          <div className="characteristicTotalValue">
            {this.calculateCharacteristic()}
          </div>

          <div className="characteristicBaseValue">
            <input
              type= "number"
              placeholder={this.state.initialValue}
            />
          </div>

          <div className="alterationBonus">
            <input
              type= "number"
              placeholder={this.state.alterationBonus}
            />          
          </div>

          <div className="variousBonus">
            <input
              type= "number"
              placeholder={this.state.variousBonus}
            />          
          </div>

          <div className="variousMalus">
            <input
              type= "number"
              placeholder={this.state.variousMalus}
            />
          </div>

          <div className="characteristicModificator">
            <input
              type= "number"
              placeholder={this.state.initialValue}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default CharacteristicLine;
