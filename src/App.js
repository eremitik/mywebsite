import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './views/Home.js';
import About from './views/About.js';
import Projects from './views/Projects.js';
import Contact from './views/Contact.js';
import LightsOut from './views/Lightsout/Board.js';
import Usexplorer from './views/Usexplorer/Usexplorer.js';
import HistoricalPx from './views/HistoricalPx/Histpx.js';




class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path='/' render={()=> <Home />}/>
              <Route exact path='/about' render={()=> <About />}/>
              <Route exact path='/projects' render={()=> <Projects />}/>
              <Route exact path='/contact' render={()=> <Contact />}/>
              <Route exact path='/projects/lightsout' render={()=> <LightsOut />}/>
              <Route exact path='/projects/usexplorer' render={()=> <Usexplorer />}/>
              <Route exact path='/projects/histpx' render={()=> <HistoricalPx />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
