import React, {Component} from 'react';
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
               <li><a href='/about'>about</a></li>
               <li><a href='/projects'>projects</a></li>
               <li><a href='/contact'>contact</a></li>
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
