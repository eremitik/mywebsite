import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import diamond from '../images/diamond.jpg';
import styled from 'styled-components';

const HomeContainer = styled.div`
  body {
    color: white;
    height: 100vh;
    width: 100vw;
  }

  html, body{
      overflow-x: hidden;
      position: relative;
  }

  a{
    text-decoration: none;
    color: white;
    letter-spacing: -4px;
    transition: .2s;
  }

  @media screen and (min-width: 901px) {
    a:hover{
      color: grey;
    }
  }

  h1{
    position: absolute;
    padding: 0 0 0 20px;
  }

  ul{
    position: absolute;
    bottom: 0px;
    margin: 0 0 0 0px;
    padding: 0 0 100px 20px;
    line-height: 8rem;
  }

  li{
    list-style-type: none;
    font-size: 8rem;
    font-weight: bold;
    margin: 0 0 0 0px;
  }

  img{
    position: absolute;
    right: 0px;
    height: 700px;
    bottom: 0;
    z-index: -100;
  }

  @media screen and (max-width: 767px) {
    html, body{
      overflow-x: hidden;
      overflow-y: hidden;
    }

    body{
      position: relative;
    }

    img{
      height: 50%;
      vertical-align: middle;
      padding-bottom: 50%;
    }

    ul{
      line-height: 4em;
      padding: 0 0 30px 20px;
    }

    a{
      font-size: 4rem;
      text-decoration: underline;
    }
  }
`

class Home extends Component {
  render(){
    return (
      <HomeContainer>
          <h1>eremitik.</h1>
              <ul>
               <li><Link to='/about'>about</Link></li>
               <li><Link to='/projects'>projects</Link></li>
               <li><Link to='/contact'>contact</Link></li>
              </ul>
          <img src={diamond} alt='diamond'/>
      </HomeContainer>
    );
  }
}

export default Home;
