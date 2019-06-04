import React, { Component } from 'react'
import HeaderItem from '../headerItem/HeaderItem';
import './Header.scss';

class Header extends Component {

  items = [
    'Personnage',
    'Classes',
    'Niveau',
    'genre',
    'Age',
    'Taille',
    'Poid',
  ]

  render() {
    return (
      <div className='header'>
        {this.items.map(item => {
          return (<HeaderItem title={item}></HeaderItem>)
        })}
      </div>
    )
  }
}

export default Header;
