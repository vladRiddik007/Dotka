import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Input from "./Component/Input/Input";
import Axios from "axios";
import Heroes from "./Component/Heroes/Heroes";
import { BrowserRouter, Route } from "react-router-dom";
import Hero from "./Component/Heroes/Hero/Hero";
//prosto comentarii
class App extends React.Component {
  state = {
    heroes: [],
    findHero: ''
  };

  componentDidMount() {
    Axios.get("https://api.opendota.com/api/heroStats").then(
      ({ data: heroes }) => {
        this.setState({ heroes });
        // console.log(heroes);
      }
    );
    //=======================================
    // fetch('https://api.opendota.com/api/heroStats')
    // .then(response => response.json())
    // .then((heroes) => {
    //   this.setState({heroes})
    //   console.log({heroes})
    // })
  }

  // searchHero = (name) => {
  //   const her = [];
  //   this.state.heroes.forEach((val) => {
  //     if(val.localized_name === name) {
  //       her.push(val);
  //     }
  //   }
  //   )
  //   this.setState({heroes: her});
  // }

  // searchH_e_r_o = (name) => {
  //   const newName = name.split('');
  //   let newHerous = [];
  //   this.state.heroes.forEach( h => {
  //     const herooo = h.localized_name.split('');
  //     let flag = false;
  //     for(let i = 0; i < newName.length; i++){
  //       newName[i] === herooo[i] ? flag = true : flag = false;
  //       }
  //       if(flag){
  //         newHerous.push(h);
  //       }
  //     })
  //     this.setState({heroes: newHerous})
  // }

   searchHero = (name) => {
    this.setState({findHero: name})
   }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Input searchHero={this.searchHero}
          // searchH_e_r_o={this.searchH_e_r_o}
          />
          {/* <Input searchHero={(name) => this.searchHero(name)}/> */}
          <Route exact path="/">
            <Heroes heroes={this.state.heroes} findHero={this.state.findHero} />
          </Route>
          <Route
            path="/:hero"
            render={({ match }) => {
              const heroLoc = match.params.hero;
              const heroI = this.state.heroes.find(hero => {
                return heroLoc === hero.localized_name;
              });
              return heroI ? <Hero hero={heroI} />: <p>Hero not found</p>;
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//<Route path="/news" component={News} />
//<NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
//import {NavLink} from 'react-router-dom';
//<Route exact path="/profile" render={() => <Profile store={props.store}/>}/>
