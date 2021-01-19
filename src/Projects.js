import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import pic from './images/projects.jpg';
import './Projects.css';
import Pokedex from './Pokedex/Pokegame.js';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
      <h1>Projects.</h1>
        <img className="Projects-img" src={pic} alt='macbook'/>
        <div className="Projects-list">
          <p><a href='/projects/ttt'>Tic-tac-toe.</a></p>
          <p><a href='/projects/pokedex'>Pokedex.</a></p>
        </div>
        <p className="Projects-link">
            <Link to='/'>home</Link>
          </p>
      </div>
    )
  }
}

export default Projects
