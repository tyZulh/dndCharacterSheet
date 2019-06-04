import React, { Component } from 'react'
import HeaderItem from '../headerItem/HeaderItem';
import './Header.scss';

class Header extends Component {

  items = [
    'Personnage',
    'Classes',
    'Niveau',
    'Age',
    'Taille',
    'Poid',
    'genre'
  ]

  render() {
    return (
      <div className='header'>
        <div>
          {this.items.map(item => {
             return (<HeaderItem title={item}></HeaderItem>)
          })}
        </div>
      </div>
    )
  }
}

export default Header;
