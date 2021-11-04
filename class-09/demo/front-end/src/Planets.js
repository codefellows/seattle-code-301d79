import React, { Component } from 'react';
import Planet from './Planet.js'

export default class Planets extends Component {
  render() {
    return (
      <div>
        <h3>Planets</h3>
        {this.props.planets.map(planet => <Planet key={planet.name} planet={planet}/>)}
      </div>
    )
  }
}
