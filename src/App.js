import React, { Component } from 'react';
import Header from './components/header/Header';
import CharactirsitcBox from './components/characteristics-box/Characteristics-box';
import './App.scss';
import CompetencesBox from './components/competences-box/compretences-box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CharactirsitcBox/>
        <CompetencesBox/>
      </div>
    );
  }
}

export default App;
