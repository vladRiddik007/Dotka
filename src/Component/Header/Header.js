import React from 'react';
import s from './Header.module.css';


class Header extends React.Component{

  render() {
    return(
      <div className={s.header}>
        <a href='/'>Drink vodka, Play Dotka</a>
      </div>
    )
  }
}

export default Header;
