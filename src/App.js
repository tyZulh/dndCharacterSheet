import React, { Component } from 'react';
import Header from './components/header/Header';
import CharactirsitcBox from './components/characteristics-box/Characteristics-box';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CharactirsitcBox/>
        
      </div>
    );
  }
}

export default App;
