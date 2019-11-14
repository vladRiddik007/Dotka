import React from 'react';
import s from './Input.module.css';


class Input extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      heroesName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  input = (e) => {
    this.setState({heroesName: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({heroesName: e.target.value})
    this.props.searchHero(e.target.value)
    // const hero1 = this.state.heroesName.split('');
    // const hero = this.props;
  }

  

  render() {
    return(
      <div >
        <form onSubmit={this.handleSubmit} className={s.Input}>
          <label>
            <input type="text" className={s.input} onChange={this.handleChange} placeholder='Введи имя героя'/>
          </label>
          <div>
            <input type="submit" value="Search" className={s.btn} 
            onClick={() => this.props.searchHero(this.state.heroesName)}/>
            {/* <button className={s.btn} onClick={() => this.props.searchHero(this.state.heroesName)}>Search</button> */}
          </div>
        </form>
      </div>
    )
  }
}

export default Input;
