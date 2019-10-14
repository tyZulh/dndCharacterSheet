import React, {Component} from 'react'
import './SaveRoll-line.scss'

class SaveRollLine extends Component {
  state = {
    rollModifier: 0,
    baseValueModifier : 0,
    characteristicModifier : 0,
    magicalModifier : 0,
    temporaryModifier : 0,
  }
  totalValue = 0

  calculateSaveRoll = () => {
    this.totalValue = this.state.baseValueModifier + this.state.characteristicModifier + this.state.magicalModifier +this.state.temporaryModifier
    return this.totalValue
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : +event.target.value}, () => {
      this.calculateSaveRoll()
      this.setState({rollModifier : this.totalValue}, ()=>{
        console.log(this.state);
        
      })
    })
  }

  render() {
    return(
      <div className= "saveLineWrapper">
        <div className= "saveRollsLine">
          <div className= "saveRollsName">
            {this.props.data}
          </div>

          <div className= "saveRollTotalValue">
            {this.state.rollModifier}
          
            <span>
              =
            </span>
          </div>


          <div className= "baseValueModifier">
            <input
              type= "number"
              name= "baseValueModifier"
              className= "inputBox"
              onChange= {this.handleChange}
            /> 

            <span>
              +
            </span> 
          </div>

          <div className= "characteristicModifier">
            <input
              type= "number"
              name= "characteristicModifier"
              className= "inputBox"
              onChange= {this.handleChange}
            />

            <span>
              +
            </span>
          </div>

          <div className= "magicalModifier">
            <input
              type= "number"
              name= "magicalModifier"
              className= "inputBox"
              onChange= {this.handleChange}
            />

            <span>
              +
            </span>
          </div>

          <div className="temporaryModifier">
            <input
              type="number"
              name="temporaryModifier"
              className="inputBox"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SaveRollLine;