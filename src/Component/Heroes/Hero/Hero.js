import React from 'react';
import s from './Hero.module.css';

const Hero = (props) => {
console.log(props.hero)

const hero = props.hero;

    return(
      <div className={s.Hero}>
          <ul>
            <li>
              <img src={'https://api.opendota.com'+ hero.img} 
                   alt={`Name: ${hero.localized_name}`}/>
            </li>
            <li>{`Name: ${hero.localized_name}`}</li>
            <li>{`Attack MAX: ${hero.base_attack_max}`}</li>
            <li>{`Attack min: ${hero.base_attack_min}`}</li>
            <li>{`Primary attr: ${hero.primary_attr}`}</li>
            <li>{`Attack type: ${hero.attack_type}`}</li>
            <li>{`Speed: ${hero.move_speed}`}</li>
            <li>{`Projectile speed: ${hero.projectile_speed}`}</li>
          </ul>
      </div>
    )
  
}

export default Hero;
