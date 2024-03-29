import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }


  createBoard() {
    let board = [];
    for (let y=0; y< this.props.nrows; y++){
      let row = [];
      for (let x=0; x< this.props.ncols; x++){
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
    return board
  }


  flipCellsAround(coord) {
    console.log('FLIPPING!', coord)
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(y,x);
    flipCell(y, x-1)
    flipCell(y, x+1)
    flipCell(y-1, x)
    flipCell(y+1, x)


    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({board: board, hasWon: hasWon})
  }



  render() {

    if(this.state.hasWon){
      return (
        <div className="Lightsout-body">
        <div className="winner">
          <span className='neon-orange'>YOU</span>
          <span className='neon-blue'>WIN</span>
        </div>
        <p className="Board-link">
        <Link to='/projects'>back</Link>
      </p>
      </div>
      )
    }

    let tblBoard = [];
    for(let y = 0; y< this.props.nrows; y++){
      let row = [];
      for (let x=0; x<this.props.ncols; x++){
        let coord = `${y}-${x}`
        row.push(<Cell key={coord} isLit={this.state.board[y][x]} flipCellsAroundMe={() => this.flipCellsAround(coord)} />)
      }
      tblBoard.push(<tr>{row}</tr>);
    }

    return (
      <div className="Lightsout-body">
        <div className="Board-title">
          <div className='neon-orange'>LIGHTS</div>
          <div className='neon-blue'>OUT</div>
        </div>
        <table className="Board">
          <tbody>{tblBoard}</tbody>
        </table>

        <p className="Board-link">
        <Link to='/projects'>back</Link>
      </p>
      </div>
    )
  }
}


export default Board;
