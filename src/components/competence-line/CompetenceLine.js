import React, { Component } from 'react';
import './CompetenceLine.scss';

class CompetenceLine extends Component {
  state = {
    totalValue : 0,

  }

  render() {
    return(
      <div className='competenceLineWrapper'>
        <div className='competenceLine'>
          <div className='abilityName'>
            {this.props.data}
          </div>

          <div className='modAbility cell'>
            <input
              type= "number"
              name="modAbility"
              className="inputBox"
              onCHange={this.handleChange}
            />
          </div>

          <div className='cell'>
            <input
              type="number"
              name="master"
              onCHange={this.handleChange}
            />
          </div>

          <div className='cell'>
            <input
              type="number"
              name="modCar"
              onCHange={this.handleChange}
            />
          </div>

          <div className='cell'>
            <input
              type="number"
              name="otherMod"
              onCHange={this.handleChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CompetenceLine