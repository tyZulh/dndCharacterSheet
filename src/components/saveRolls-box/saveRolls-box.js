import React, {Component} from 'react';
import SaveRollLine from '../competence-line/CompetenceLine'

class SaveRollBox extends Component {
  saves = [ 
    'réflexes',
    'vigueur',
    'volonté'
  ]
  render() {
    return(
      <div className='saveRollBox'>
        {this.saves.map(save => {
          return <SaveRollLine data={saves}/>
        })}
      </div>
    )
  }
}