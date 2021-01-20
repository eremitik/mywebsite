import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Pokedex from './Pokedex/Pokegame.js';
import Ttt from './Ttt/Ttt.js';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Router>
          <Switch>
              <Route exact path='/' render={()=> <Home />}/>
              <Route exact path='/about' render={()=> <About />}/>
              <Route exact path='/projects' render={()=> <Projects />}/>
              <Route exact path='/contact' render={()=> <Contact />}/>
              <Route exact path='/projects/ttt' render={()=> <Ttt />}/>
              <Route exact path='/projects/pokedex' render={()=> <Pokedex />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
