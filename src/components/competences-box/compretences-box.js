import React, { Component } from 'react';
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