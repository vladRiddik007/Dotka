import React from 'react';
import s from './Heroes.module.css';
import {Link} from 'react-router-dom';

const renderHero = (heroes, findHero) => {
  return heroes.map((hero) => (
    <Link to={'/'+ hero.localized_name} key={hero.id}>
      <img src={'https://api.opendota.com'+ hero.img}
      className={findHero && hero.localized_name.toLowerCase().includes(findHero.toLowerCase()) ? 'findHero' : ''}
      alt={hero.name} title={hero.localized_name}/>
    </Link>
  ))
}

const Heroes = (props) => {
// console.log(props)
  const {heroes} = props;
  const int = heroes.filter( hero => hero.primary_attr === 'int');
  const str = heroes.filter( hero => hero.primary_attr === 'str');
  const agi = heroes.filter( hero => hero.primary_attr === 'agi');

  const heroInt = renderHero(int, props.findHero);
  const heroStr = renderHero(str, props.findHero);
  const heroAgi = renderHero(agi, props.findHero);


// const heroList = renderHero(props.heroes);

  return(
      <div className={s.heroes}>
          {/* {heroList} */}
          <div >
            <div className='heroes'>
              <div className='heroesStr'><p>STRENGTH</p>{heroStr}</div>
              <div className='heroesInt'><p>INTELLIGENCE</p>{heroInt}</div>
            </div>
            <div className='heroesAgi'><p>AGILITY</p>{heroAgi}</div>
          </div>
      </div>
  )
}

export default Heroes;
