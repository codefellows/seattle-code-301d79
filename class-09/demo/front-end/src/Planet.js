import React, { Component } from 'react'

export default class Planet extends Component {
  render() {
    return (
      <div>
        <p>{this.props.planet.name}</p>
      </div>
    )
  }
}
