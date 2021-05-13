import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pic from './images/projects.jpg';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  html, body{
    text-align: center;
    color: white;
    margin: auto;
    text-align: center;
    height: 100vh;
    width: 100vw;
  }

  a{
    color: white;
    text-decoration: none;
    transition: .2s;
  }

  @media screen and (min-width: 901px) {
    a:hover{
      color: grey;
    }
  }

 img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 450px;
    filter: grayscale();
    transition: 0.5s filter ease;
    border-radius: 25px;

  }

  img:hover{
    filter: none;
  }

  ul{
  display: block;
    margin-left: auto;
    margin-right: auto;
    bottom: 0px;
    margin: 0 0 0 0px;
    padding: 0 0 30px 0;
  }

  li{
    list-style-type: none;
    font-size: 1rem;
    margin: 0 0 0 0px;
    text-align: center;
  }


  p{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    text-align: center;
  }

  h1{
    font-size: 2rem;
    text-align: center;
  }

  h2{
    text-align: center;
  }

  link{
    text-align: center;
    font-size: 8rem;
    font-weight: bold;
    letter-spacing: -4px;
  }


  @media screen and (max-width: 767px) {

    html, body{
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100vh;
      width: 100vw;
    }

    body{
      position: relative;
    }

    img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: auto;
      width: 300px;
    }

    p{
      width: 300px;      
    }
  }
`

const HomeLink = styled.a`
  a{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
     text-align: center;
     text-decoration: none;      
     color: white;               
     letter-spacing: -4px;       
     font-size: 8rem;
     font-weight: bold;
     transition: .2s;
  }                                 

  @media screen and (min-width: 901px) {
    a:hover{
      color: grey;
    }
  } 

   @media screen and (max-width: 767px) {
    a{
     font-size: 4rem;
     text-decoration: underline;
     }
   }
`

class Projects extends Component {
  render() {
    return (
      <ProjectContainer>
      <h1>Projects.</h1>
        <img src={pic} alt='macbook'/>
        <ul>
          <h2>Dapp</h2>
          <li> <a href="https://eremitik-instadapp.netlify.app/">📷Instadapp</a></li>
          <li> <a href="https://eremitik-multisig.netlify.app/">👛Multisig Wallet</a></li>
          <li> <a href="https://eremitik-nflipt.netlify.app/">👀NFlipT</a></li>
          <li> <a href="https://eremitik-sushiswap.netlify.app/">🍣Sushiswap Fork</a></li>
          <li><Link to='/projects/usexplorer'>🦄Uniswap Explorer</Link></li>
          <li> <a href="https://eremitik-uniswap.netlify.app/#/swap">🍴Uniswap Fork</a></li>
          <h2>React</h2>
          <li> <a href="https://eremitik-5w.netlify.app/#/">📰5w</a></li>
          <li> <a href="https://eremitik-cars.netlify.app">🚗Carsite 🆕</a></li>
          <li> <a href="https://eremitik-crypto-yields.netlify.app/">💸Crypto Yields</a></li>
          <li><Link to='/projects/histpx'>📈Historical Prices</Link></li>
          <li> <a href="https://pkkt.netlify.app/">📄Landing Page</a></li>
          <li><Link to='/projects/lightsout'>💡Lights Out</Link></li>
          <li><Link to='/projects/responsive'>📱Responsive</Link></li>
        </ul>
        <HomeLink>
            <Link to='/'>home</Link>
          </HomeLink>
      </ProjectContainer>
    )
  }
}

export default Projects


/*
Old projects:

          <li><Link to='/projects/colorbox'>🏁Color Box</Link></li>
          <li><Link to='/projects/carddeck'>🃏Card Dealer</Link></li>
          <li><Link to='/projects/coinflip'>🤑Coin Flip</Link></li>
          <li><Link to='/projects/lotto'>🎟Lottery</Link></li>
          <li><Link to='/projects/pokedex'>🖥Pokedex</Link></li>
          <li><Link to='/projects/rolldice'>🎲Roll Dice</Link></li>
          <li><Link to='/projects/ttt'>❌Tic-tac-toe</Link></li>
          <li><Link to='/projects/todo'>🗒To-do List</Link></li>

          <h2>Svelte</h2>
          <li> <a href="https://eremitik-fsociety.herokuapp.com/">🎭fsociety</a></li>

          <h2>Vanilla JS</h2>
          <li> <a href="https://eremitik-3d-popout.netlify.app">🚗3D Popout</a></li>
*/
