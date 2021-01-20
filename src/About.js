import React, { Component } from 'react'
import { Link } from "react-router-dom";
import pig from './images/contactme.jpg';

import './About.css';


class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>Mikio Crosby.</h1>
        <img className="About-pic" src={pig} alt='pig'/>
        <div className="About-desc">
          I am a cryptocurrency enthusiast with a background in traditional finance. 
          This site is a collection of my projects in my pursuit of learning to code.
        </div>
        <br></br>
        <div className="About-desc">
          This site and all projects were made with React. Source code can be found <b><a href="https://github.com/eremitik/mywebsite">here</a></b>.
        </div>
        <p className="About-link">
          <Link  to='/'>home</Link>
        </p>
      </div>
    )
  }
}

export default About;
