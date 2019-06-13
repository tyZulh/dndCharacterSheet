import React, { Component } from 'react';
import CompetenceLine from '../competence-line/CompetenceLine'
import './competences-box.scss'

class CompetencesBox extends Component {
  competences = [
    "Acrobaties",
    "Art de la magie",
    "Artisanat",
    "Bluff",
    "Concentration",
    "Connaissance",
    "Contrefaçon",
    "Crochetage",
    "Décryptage",
    "Déguisement",
    "Déplacement silencieux",
    "Désamorçage",
    "Détection",
    "Diplomatie",
    "Discrétion",
    "Dressage",
    "Equilibre",
    "Equitation",
    "Escalade",
    "Escamotage",
    "Estimation",
    "Evasion",
    "Fouille",
    "Intimidation",
    "Langue",
    "Maîtrise des cordes",
    "Natation",
    "Perception auditive",
    "Premiers secours",
    "Profession",
    "Psychologie",
    "Renseignements",
    "Représentation",
    "Saut",
    "Survie",
    "Utilisation d'objets magiques",
  ]
  render() {
    return(
      <div className='competencesBox'>
        <div className='competenceHeader'>
          <span className='abilityName'>Nom de la compétence</span>
          <span className='modAbility'>Mod. de comp.</span>
          <span className='master'>Maitrise</span>
          <span className='modCar'>Mod. de car.</span>
          <span className='otherMod'>Mod. divers</span>
        </div>
        {this.competences.map(competence => {
          return (
            <CompetenceLine data={competence}/>
          )
        })}
      </div>
    )
  }
}
export default CompetencesBox