import React, {Component} from 'react'
import './ArmoryClass-box.scss'

class ArmoryClassBox extends Component {
  state = {
    armoryClass : 10,
    armorBaseValue : 0,
    dexModifier : 0,
    shieldModifier : 0,
    heightModifier : 0,
    naturalArmorModifier : 0,
    parryModifier : 0,
    otherModifier : 0,
    contactArmorClass : 0,
    surprisedArmorClass : 0
  }

  totalValue = 0

  calculateClassArmory = () => {
    this.totalValue = 10 + this.state.armorBaseValue + this.state.dexModifier + this.state.shieldModifier + this.state.heightModifier + this.state.naturalArmorModifier + this.state.parryModifier + this.state.otherModifier
    return this.totalValue
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : +event.target.value}, () => {
      this.calculateClassArmory()
      this.setState({armoryClass : this.totalValue}, ()=>{
        console.log(this.state);
        
      })
    })
  }

  render() {
    return (
      <div className="armoryClassWrapper">

        <section className="armorClassDetail">

          <div className="armorValue">
            <div className="armorValueHeader">
              Classe d'armure
            </div>
            
            <div>
              {this.state.armoryClass}
            </div>

            <span>
              = 10 +
            </span>
          </div>

          <div className="armorBaseValue cell">
            <label className="armorBaseValueHeader">
              Bonus d'armure
            </label>

            <input
              type="number"
              name="armorBaseValue"
              onChange={this.handleChange}
              className="inputBox"
            />

            <span>
              +
            </span>

          </div>

          <div className="dexModifier cell">
            <label className="dexModifierHeader">
              Mod de dex
            </label>

            <input
              type="number"
              name="dexModifier"
              onChange={this.handleChange}
              className="inputBox"
            />

            <span>
              +
            </span>
          </div>

          <div className="shieldModifier cell">
            <label className="shieldModifierHeader">
              Bonus de bouclier
            </label>

            <input
              type="number"
              name="shieldModifier"
              onChange={this.handleChange}
              className="inputBox"
            />

            <span>
                +
            </span>
          </div>

          <div className="heightModifier cell">
            <label className="heightModifierHeader">
              Mod de taille
            </label>
            
            <input
              type="number"
              name="heightModifier"
              onChange={this.handleChange}
              className="inputBox"
            />

            <span>
              +
            </span>
          </div>

          <div className="naturalArmorModifer cell">
            <label className="naturalArmorModifierHeader">
              Bonus d'armure naturelle
            </label>
            
            <input
              type="number"
              name="naturalArmorModifier"
              onChange={this.handleChange}
              className="inputBox"
            />

            <span>
              +
            </span>
          </div>

          <div className="parryModifier cell">
            <label className="parryModifierHeader">
              Bonus de parrade
            </label>

            <input
              type="number"
              name="parryModifier"
              onChange={this.handleChange}
              className="inputBox"
            />

            <span>
              +
            </span>
          </div>

          <div className="otherModifier cell">
            <label className="otherModifierHeader">
              Modificateur divers
            </label>

            <input
              type="number"
              name="otherModifier"
              onChange={this.handleChange}
              className="inputBox"
            />
          </div>  
        </section>
      </div>
    )
  }
}

export default ArmoryClassBox