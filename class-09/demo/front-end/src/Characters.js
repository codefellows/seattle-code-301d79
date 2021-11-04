import React, { Component } from 'react';
import Character from './Character'

export default class Characters extends Component {
  render() {
    return (
      <div>
        <h3>Characters</h3>
        {this.props.characters.map(char => <Character key={char.name} character={char}/>)}
      </div>
    )
  }
}
