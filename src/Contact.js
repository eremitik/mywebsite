import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import mcrosby from './images/mcrosby.jpg';
import github from './images/whitegithub.png';
import twitter from './images/whitetwitter.png';
import youtube from './images/whiteyt.png';
import pokket from './images/whitepokket.png';
import linkedin from './images/whitelinkedin.png';
import './Contact.css';


class About extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact me.</h1>
        <img className="Contact-pic" src={mcrosby} alt='profile'/>
        {/* <p>mikio.crosby@gmail.com</p> */}
        {/* <p>miks@pokket.com</p> */}

        <div className="Contact-icons">
        <a href="https://github.com/eremitik">
          <img className="Contact-github" src={github} alt='github'/>
        </a>

        <a href="https://twitter.com/eremitik">
          <img className="Contact-twitter" src={twitter} alt='twitter'/>
        </a>

        <a href="https://www.youtube.com/channel/UCCCNJEKyE-KDqM-vfGFuBBQ/featured">
          <img className="Contact-youtube" src={youtube} alt='youtube'/>
        </a>

        <a href="https://www.linkedin.com/in/eremitik/">
          <img className="Contact-linkedin" src={linkedin} alt='linkedin'/>
        </a>

        <a href="https://pokket.com/">
          <img className="Contact-pokket" src={pokket} alt='pokket'/>
        </a>
        
        </div>

        <p className="Contact-link">
          <Link  to='/'>home</Link>
        </p>
      </div>
    )
  }
}

export default About
