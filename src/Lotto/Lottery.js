import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Ball from './Ball.js';
import './Lottery.css'


class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }

  constructor(props){
    super(props);
    this.state = {nums: Array.from({length: this.props.numBalls})};
    this.handleClick = this.handleClick.bind(this);
  }

  generate(){
    this.setState(curState=> ({
      nums: curState.nums.map(n=>Math.floor(Math.random()* this.props.maxNum) +1)
    }))
  } 

  handleClick(){
    this.generate();
  }

  render(){
    return (
      <section className="Lottery">
        <h1>🎟️Lottery</h1>
        <div>
          {this.state.nums.map(
            n=> <Ball num={n}/>)}
        </div>
        <button onClick={this.handleClick}>Generate</button>

        <p className="CoinContainer-link">
          <Link to='/projects'>back</Link>
        </p>
      </section>
    )
  }
}

export default Lottery;
