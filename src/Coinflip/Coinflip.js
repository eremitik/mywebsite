import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {choice} from './helpers.js';
import Coin from './Coin.js';
import coinfront from '../images/500yenfront.jpg';
import coinback from '../images/500yenback.jpg';
import './Coinflip.css';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgsrc: coinfront},
      {side: 'tails', imgsrc: coinback}
    ]
  }
  
  constructor(props){
    super(props);
    this.state={
      currCoin: 'heads',
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin(){
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
      };
    });
  }

  handleClick(e){
    this.flipCoin();
  }

  render(){
    return (
      <div className="CoinContainer">
        <h1>🤑Coin Flip</h1>
        <p>Total flips: {this.state.nFlips} ({this.state.nHeads} heads and {this.state.nTails} tails.)</p>
        {this.state.currCoin && <Coin info={this.state.currCoin}/>}
        <button className="CoinContainer-button" onClick={this.handleClick}>Flip Me!</button>

      <p className="CoinContainer-link">
        <Link to='/projects'>back</Link>
      </p>
      </div>
    )
  }

}

export default CoinContainer;
