import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pic from './images/projects.jpg';
import './Projects.css';


class Projects extends Component {
  render() {
    return (
      <div className="Projects">
      <h1>Projects.</h1>
        <img className="Projects-img" src={pic} alt='macbook'/>
        <div className="Projects-list">
          <p><Link to='/projects/ttt'>Tic-tac-toe.</Link></p>
          <p><Link to='/projects/pokedex'>Pokedex.</Link></p>
        </div>
        <p className="Projects-link">
            <Link to='/'>home</Link>
          </p>
      </div>
    )
  }
}

export default Projects
