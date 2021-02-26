import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Card from './Card.js';
import './Deck.css';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/"

class Deck extends Component {

  constructor(props){
    super(props)
    this.state = {deck: null, drawn: []}
    this.getCard = this.getCard.bind(this)
  }

  async componentDidMount(){
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`)
    this.setState({deck: deck.data})
  }

  async getCard(){
    let id = this.state.deck.deck_id
    try {
      let cardUrl = `${API_BASE_URL}/${id}/draw/`
      let cardRes = await axios.get(cardUrl)
      if(!cardRes.data.success){
        throw new Error ("No card remaining!")
    }
    let card = cardRes.data.cards[0];
    this.setState(st => ({
      drawn: [
        ...st.drawn,
        {id: card.code, image: card.image, name: `${card.value} of ${card.suit}`},
        ]
      }))
    } catch (err) {
      alert(err);
    }
  }

  render() {

    const cards = this.state.drawn.map(c => (
      <Card key={c.id} name={c.name} image={c.image} />
    ))

    return (
      <div className="Deck">
        <h1 className="Deck-title">🃏Card Dealer</h1>
        <h2 className="Deck-title-subtitle">♦	click button to deal card! ♦</h2>
        <div className="Deck-cardarea">
          {cards}
        </div>
        <button className = "Deck-btn" onClick={this.getCard}>Deal!</button>
        
        <p className="Deck-link">
            <Link to='/projects'>back</Link>
        </p>

      </div>
    )
  }
}

export default Deck
