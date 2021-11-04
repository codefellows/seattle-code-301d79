import React, { Component } from 'react'

export default class Character extends Component {
  render() {
    return (
      <div>
        <p>{this.props.character.name}</p>
      </div>
    )
  }
}
