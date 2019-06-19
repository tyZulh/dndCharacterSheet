import React, { Component } from 'react';
import Header from './components/header/Header';
import CharactirsitcBox from './components/characteristics-box/Characteristics-box';
import './App.scss';
import CompetencesBox from './components/competences-box/Competences-box';
import SaveRollsBox from './components/saveRolls-box/SaveRolls-box';
import ArmoryClassBox from './components/armoryClass-box/ArmoryClass-box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SaveRollsBox/>
        <CharactirsitcBox/>
        <CompetencesBox/>
        <ArmoryClassBox/>
      </div>
    );
  }
}

export default App;
