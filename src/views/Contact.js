import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import lasers from '../images/lasers.png';
import github from '../images/whitegithub.png';
import twitter from '../images/whitetwitter.png';
import youtube from '../images/whiteyt.png';
import pokket from '../images/whitepokket.png';
import linkedin from '../images/whitelinkedin.png';
import styled from 'styled-components';

const ContactContainer = styled.div`
  html, body{
    text-align: center;
    color: white;
    margin: auto;
    text-align: center;
    height: 100vh;
    width: 100vw;
  }

 img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
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
    text-align: center;
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

const SocialLinksContainer = styled.div`
  div{
    text-align: center;

  }
`

const SocialLinks = styled.div`
  img{
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 15px;
    width: auto;
    padding: 25px; 
  }
`

const HomeLink = styled.a`

  a{
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    text-decoration: none;      
    color: white;               
    letter-spacing: -4px;       
    font-size: 8rem;
    font-weight: bold;
    padding-top: 25px;
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
  @media screen and (min-width: 901px) {
    a:hover{
      color: grey;
    }
  }


`



class About extends Component {
  render() {
    return (
      <ContactContainer>
        <h1>Contact me.</h1>
        <img className="Contact-pic" src={lasers} alt='profile'/>

        <SocialLinksContainer>
        <SocialLinks>
        <a href="https://github.com/eremitik">
          <img src={github} alt='github'/>
        </a>

        <a href="https://twitter.com/eremitik">
          <img src={twitter} alt='twitter'/>
        </a>

        <a href="https://www.youtube.com/channel/UCCCNJEKyE-KDqM-vfGFuBBQ/featured">
          <img src={youtube} alt='youtube'/>
        </a>

        <a href="https://www.linkedin.com/in/eremitik/">
          <img src={linkedin} alt='linkedin'/>
        </a>

        <a href="https://pokket.com/">
          <img src={pokket} alt='pokket'/>
        </a>
        </SocialLinks>
        </SocialLinksContainer>

        <HomeLink>
          <Link  to='/'>home</Link>
        </HomeLink>
      </ContactContainer>
    )
  }
}

export default About
