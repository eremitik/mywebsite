import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Pokedex from './Pokedex/Pokegame.js';
import Ttt from './Ttt/Ttt.js';
import Carddealer from './Carddealer/Deck.js';
import RollDice from './Rolldice/RollDice.js';
import CoinFlip from './Coinflip/Coinflip.js';
import LightsOut from './Lightsout/Board.js';
import Lotto from './Lotto/Lottery.js';
import ColorBox from './ColorBox/BoxContainer.js';
import ToDo from './ToDo/TodoList.js';
import Usexplorer from './Usexplorer/Usexplorer.js';
import Responsive from './Responsive/Responsive.js';
import HistoricalPx from './HistoricalPx/Histpx.js';
//import Threed from './Threed/app.js';




class App extends Component {
  render(){
    return (
      <div>
        {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Router>
          <Switch>
              <Route exact path='/' render={()=> <Home />}/>
              <Route exact path='/about' render={()=> <About />}/>
              <Route exact path='/projects' render={()=> <Projects />}/>
              <Route exact path='/contact' render={()=> <Contact />}/>
              <Route exact path='/projects/ttt' render={()=> <Ttt />}/>
              <Route exact path='/projects/pokedex' render={()=> <Pokedex />}/>
              <Route exact path='/projects/carddeck' render={()=> <Carddealer />}/>
              <Route exact path='/projects/rolldice' render={()=> <RollDice />}/>
              <Route exact path='/projects/coinflip' render={()=> <CoinFlip />}/>
              <Route exact path='/projects/lightsout' render={()=> <LightsOut />}/>
              <Route exact path='/projects/lotto' render={()=> <Lotto />}/>
              <Route exact path='/projects/colorbox' render={()=> <ColorBox />}/>
              <Route exact path='/projects/todo' render={()=> <ToDo />}/>
              <Route exact path='/projects/usexplorer' render={()=> <Usexplorer />}/>
              <Route exact path='/projects/responsive' render={()=> <Responsive />}/>
              <Route exact path='/projects/histpx' render={()=> <HistoricalPx />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
