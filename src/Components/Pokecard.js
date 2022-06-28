import React, { Component } from 'react';
import './Pokecard.css';

const Poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (Number) => (Number <= 999 ? `00${Number}`.slice(-3) : Number);    //here it will remove from -3 index from left 
                                                                                    // to get 043 or 004 number if it is a 00143 then it will slice 00.
// console.log(padToThree);

export default class Pokecard extends Component {
  render() {
      let imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`;
      // console.log(imgSrc);
    return (
      <div className='Pokecard'>
          <h1 className='Pokecard-title'>{this.props.name}</h1>
          <div className='Pokecard-image'>
              <img src={imgSrc} alt = {this.props.name}/>
          </div>
          <div className='Pokecard-data'>Type: {this.props.type}</div>
          <div className='Pokecard-data'>Exp: {this.props.exp}</div>
      </div>
    )
  }
}
