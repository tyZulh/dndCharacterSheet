import React, { Component } from 'react';
import './CompetenceLine.scss';

class CompetenceLine extends Component {
  state = {
    totalValue : 0,
    master : 0,
    modCar : 0,
    otherMod : 0,
    abilityClass : true,
    inateAbility : false,
  }
  totalValue = 0

  calculateAbilityModifier = _=>{
    if (this.state.abilityClass || this.state.inateAbility) {
      this.totalValue = this.state.master + this.state.modCar + this.state.otherMod
    } else {
      this.totalValue = Math.floor(this.state.master / 2) + this.state.modCar + this.state.otherMod
    }

    return this.totalValue
  }

  classAbility = _=>{
    const abilityClass = !this.state.abilityClass; 
    this.setState({abilityClass : abilityClass}, ()=>{
      this.calculateAbilityModifier()
      this.setState({totalValue : this.totalValue})
    })

  }

  handleChange = event => {
    event.preventDefault()
    this.setState({[event.target.name]: +event.target.value}, ()=> {
      this.calculateAbilityModifier()
      this.setState({totalValue : this.totalValue})
    })
  }

  render() {
    return(
      <div className='competenceLineWrapper'>
        <div className='competenceLine'>
          <div className='abilityName'>
            <div
              className={this.state.abilityClass ? 'classAbility' : 'isClassAbility'}
              onClick={this.classAbility} >
            </div>
            {this.props.data}
          </div>


          <div className='modAbility cell'>
            <span>
             {this.state.totalValue} =
            </span>
          </div>

          <div className='master cell'>
            <input
              type="number"
              name="master"
              className="inputBox"
              onChange={this.handleChange}
            />
            <span>
              +
            </span>
          </div>

          <div className='modCar cell'>
            <input
              type="number"
              name="modCar"
              className="inputBox"
              onChange={this.handleChange}
            />
            
            <span>
              +
            </span>
          </div>

          <div className='otherMod cell'>
            <input
              type="number"
              name="otherMod"
              className="inputBox"
              onChange={this.handleChange}
            />

            <span>
              
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default CompetenceLine