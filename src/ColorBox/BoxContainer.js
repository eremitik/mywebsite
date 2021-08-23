import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Box from './Box';
import './BoxContainer.css'


class BoxContainer extends Component {

  static defaultProps = {
    numBoxes: 160,
    allColors: ['#151515', '#202020', '#303030', '#404040', '#505050', '#606060']
  }

  render(){
    const boxes = Array.from({length: this.props.numBoxes}).map(
      ()=><Box colors={this.props.allColors}/>
    )
    return(
      <div className='BoxContainer-body'>
        <h1>🏁Color Box</h1>
        <div className = "BoxContainer">{boxes}</div>
        <p className="CoinContainer-link">
          <Link to='/projects'>back</Link>
        </p>
      </div>
    )
  }
}


export default BoxContainer;
