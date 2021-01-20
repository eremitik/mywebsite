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
        <ul className="Projects-list">
          <li><Link to='/projects/carddeck'>Card Dealer.</Link></li>
          <li><Link to='/projects/colorbox'>Color Box.</Link></li>
          <li><Link to='/projects/coinflip'>Coin Flip.</Link></li>
          <li><Link to='/projects/lightsout'>Lights Out.</Link></li>
          <li><Link to='/projects/lotto'>Lottery.</Link></li>
          <li><Link to='/projects/pokedex'>Pokedex.</Link></li>
          <li><Link to='/projects/rolldice'>Roll Dice.</Link></li>
          <li><Link to='/projects/ttt'>Tic-tac-toe.</Link></li>
          <li><Link to='/projects/todo'>To-do List.</Link></li>
        </ul>
        <p className="Projects-link">
            <Link to='/'>home</Link>
          </p>
      </div>
    )
  }
}

export default Projects
