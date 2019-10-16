import React, { Component } from 'react';
import axios from 'axios';
import './Characteristic-line.scss'

class CharacteristicLine extends Component {
  state = {
    name : "",
    totalValue : 0,
    initialValue : 0,
    alterationBonus : 0,
    variousBonus : 0,
    variousMalus : 0,
    modificator : 0,
  }
  totValue = 0
  modCharacteristic = 0

  calculateCharacteristic = _=> {
    this.totValue = this.state.initialValue + this.state.alterationBonus + this.state.variousBonus - this.state.variousMalus
    return this.totValue
  }

  calculateCharacteristicMod = _=> {
    this.modCharacteristic = Math.floor(( this.calculateCharacteristic() - 10 ) / 2)
    return this.modCharacteristic
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({[event.target.name] : +event.target.value}, ()=> {
      this.calculateCharacteristic()
      this.setState({
        totalValue : this.totValue,
      }, ()=> {
        this.calculateCharacteristicMod()
        this.setState({modificator : this.modCharacteristic}, ()=>{
          axios.post('http://localhost:4000/characteristics/' + this.props.data, {
            ...this.state
          })
        })

      })
    })
    
  }

  componentDidMount() {
    this.setState({
      name : this.props.data
    })

    axios.get('http://localhost:4000/characteristics/' + this.props.data)
    .then(result => {
      console.log(result);

      this.setState({
        ...result.data
      })
    })
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="charLineWrapper">
        <div className="characteristicLine">
          <div className="characteristicName">
            {this.props.data} :
          </div>

          <form className="characteristicContainer">
            <div className="characteristicTotalValue cell">
              {this.calculateCharacteristic()} = 
            </div>

            <div className="characteristicBaseValue cell">
              <input
                type= "number"
                name="initialValue"
                className="inputBox"
                onChange={this.handleChange}
                value={this.state.initialValue}
              /> + 
            </div>

            <div className="alterationBonus cell">
              <input
                type= "number"
                name="alterationBonus"
                className="inputBox"
                onChange={this.handleChange}
                value={this.state.alterationBonus}
              /> +     
            </div>

            <div className="variousBonus cell">
              <input
                type= "number"
                name="variousBonus"
                className="inputBox"
                onChange={this.handleChange}
                value={this.state.variousBonus}
              /> -
            </div>

            <div className="variousMalus cell">
              <input
                type= "number"
                name="variousMalus"
                className="inputBox"
                onChange={this.handleChange}
                value={this.state.variousMalus}
              />
            </div>

            <div className="characteristicModificator cell">
              {this.calculateCharacteristicMod()}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacteristicLine;
