import React, { Component } from 'react'
import { Link } from "react-router-dom";
import setup from './images/setup.jpg';
import styled from 'styled-components';

const AboutContainer = styled.div`
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
    font-weight: bold;
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
    height: 400px;
    filter: grayscale();
    transition: 0.5s filter ease;
    border-radius: 25px;

  }

  img:hover{
    filter: none;
  }

  p{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    text-align: left;
  }

  h1{
    font-size: 2rem;
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
      height: 300px;
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
    margin-top: 30px;
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

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <h1>Mikio Crosby.</h1>
        <img src={setup} alt='pig'/>
        <br/>
        <br/>
        <p>
          I am a cryptocurrency enthusiast with a background in traditional finance. 
          This site is a collection of my projects in the pursuit of learning to code.
        </p>
        <br/>
        <p>
          This site and projects were made with React + Solidity. Source code can be found <a href="https://github.com/eremitik/mywebsite/tree/src_folder">here</a>.
        </p>
        <HomeLink>
          <Link to='/'>home</Link>
        </HomeLink>
      </AboutContainer>
    )
  }
}

export default About;
