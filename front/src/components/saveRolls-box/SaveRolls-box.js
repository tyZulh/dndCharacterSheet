import React, {Component} from 'react';
import SaveRollLine from '../saveRoll-line/SaveRoll-line'
import './SaveRolls-box.scss'

class SaveRollsBox extends Component {
  saves = [ 
    'réflexes',
    'vigueur',
    'volonté'
  ]
  render() {
    return(
      <div className='saveRollsBox'>
        {this.saves.map(save => {
          return <SaveRollLine data={save}/>
        })}
      </div>
    )
  }
}

export default SaveRollsBox