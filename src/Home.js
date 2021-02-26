import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import diamond from './images/diamond.jpg';
import './Home.css';




class Home extends Component {
  render(){
    return (
      <div className="Home">
        <div className="Left-side">
          <h1 className='Name'>eremitik.</h1>
            <div className="Container">
              <ul className="Links" style={{listStyleType:"none"}}>
               <li><Link to='/about'>about</Link></li>
               <li><Link to='/projects'>projects</Link></li>
               <li><Link to='/contact'>contact</Link></li>
              </ul>
            </div>
        </div>
        <div className="Right-side">
          <img className="Home-pic" src={diamond} alt='diamond'/>
        </div>
      </div>
    );
  }
}

export default Home;
