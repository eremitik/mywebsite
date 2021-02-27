import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pic from './images/projects.jpg';
import './Projects.css';


class Projects extends Component {
  render() {
    return (
      <div className="Projects">
      <h1 className="Projects-title">Projects.</h1>
        <img className="Projects-img" src={pic} alt='macbook'/>
        <ul className="Projects-list">
          <h2>Dapp</h2>
          <li> <a href="https://eremitik-instadapp.netlify.app/">📷Instadapp</a></li>
          <li> <a href="https://eremitik-multisig.netlify.app/">👛Multisig Wallet</a></li>
          <li> <a href="https://eremitik-nflipt.netlify.app/">👀NFlipT</a></li>
          <li> <a href="https://eremitik-sushiswap.netlify.app/">🍣Sushiswap Fork</a></li>
          <li><Link to='/projects/usexplorer'>🦄Uniswap Explorer</Link></li>
          <li> <a href="https://eremitik-uniswap.netlify.app/#/swap">🍴Uniswap Fork</a></li>
          <h2>React</h2>
          <li><Link to='/projects/carddeck'>🃏Card Dealer</Link></li>
          <li><Link to='/projects/coinflip'>🤑Coin Flip</Link></li>
          <li><Link to='/projects/colorbox'>🏁Color Box</Link></li>
          <li><Link to='/projects/lightsout'>💡Lights Out</Link></li>
          <li><Link to='/projects/lotto'>🎟Lottery</Link></li>
          <li><Link to='/projects/pokedex'>🖥Pokedex</Link></li>
          <li><Link to='/projects/responsive'>📱Responsive</Link></li>
          <li><Link to='/projects/rolldice'>🎲Roll Dice</Link></li>
          <li><Link to='/projects/ttt'>❌Tic-tac-toe</Link></li>
          <li><Link to='/projects/todo'>🗒To-do List</Link></li>
          <h2>Svelte</h2>
          <li> <a href="https://eremitik-fsociety.herokuapp.com/">🎭fsociety</a></li>
        </ul>
        <p className="Projects-link">
            <Link to='/'>home</Link>
          </p>
      </div>
    )
  }
}

export default Projects
