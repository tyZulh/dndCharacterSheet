import React, {Component} from 'react'
import './Inventory-box.scss'

class InventoryBox extends Component {
  state = {
    equipementList : [],
    equipementToAddName : '',
    equipementToAddWeight : '',
    equipementToAddLocation : '',
    equipementToAddPrice : '',
    equipementToAddNote : ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value}, ()=> {
      console.log(this.state);
      
    })
  }

  resetState = () => {
    this.setState({
      equipementToAddName : '',
      equipementToAddWeight : '',
      equipementToAddLocation : '',
      equipementToAddPrice : '',
      equipementToAddNote : ''
    },)
  }

  addEquipement = () => {     
    const equipementToAdd = {
      name : this.state.equipementToAddName,
      location : this.state.equipementToAddLocation,
      weight : this.state.equipementToAddPrice,
      price : this.state.equipementToAddWeight,
      note : this.state.equipementToAddNote
    }

    if(this.state.equipementList.length > 0 ) {
      const equipement = [ ...this.state.equipementList, equipementToAdd ]
      this.setState({equipementList : equipement},()=> {
        this.resetState()
      }
    )} else {
      this.setState({equipementList : [equipementToAdd]}, ()=> {
        this.resetState()
      })
    }
  }

  componentDidMount() {
  }

  render() {
    return(
      <section className="inventoryBox">
        <div className="addEquipement">
          <span>
            Equipement : 
          </span>

          <div className="">
            <input
              className="inputBox"
              type="text"
              name="equipementToAddName"
              onChange={this.handleChange}
              value={this.state.equipementToAddName}
              />
          </div>

          <div className="">
            <input
              className="inputBox"
              type="textarea"
              name="equipementToAddNote"
              onChange={this.handleChange}
              value={this.state.equipementToAddName}
              />
          </div>

          <div className="">
            <input
              className="inputBox"
              type="text"
              name="equipementToAddLocation"
              onChange={this.handleChange}
              value={this.state.equipementToAddLocation}
              />
          </div>

          <div className="">
            <input
              className="inputBox"
              type="text"
              name="equipementToAddWeight"
              onChange={this.handleChange}
              value={this.state.equipementToAddWeight}
              />
          </div>

          <div className="">
            <input
              className="inputBox"
              type="text"
              name="equipementToAddPrice"
              onChange={this.handleChange}
              value={this.state.equipementToAddPrice}
            />
          </div>

          <div className="addButton" onClick={this.addEquipement}>
            Ajouter
          </div>
        </div>
      
        <div className="equipementList">
          {this.state.equipementList.map( (equipement, index) => {
            console.log(index, equipement);
            
            
            return (
              <div>
                <div>
                  {equipement.name}
                </div>

                <div>
                  {equipement.note}
                </div>

                <div>
                  {equipement.location}
                </div>

                <div>
                  {equipement.price}
                </div>

                <div>
                  {equipement.weight}
                </div>
              </div>
            )
          })}
        </div>      
      </section>
    )
  }
}

export default InventoryBox