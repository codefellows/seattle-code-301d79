import React, { Component } from 'react';
import Starship from './Starship.js';

export default class Starships extends Component {
  render() {
    return (
      <div>
        <h3>Starships</h3>
        {this.props.starships.map(ship => <Starship key={ship.name}starship={ship}/>)}
      </div>
    )
  }
}
