import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <div id="map">
        <h3>Map of {this.props.location.search_query}</h3>
        {this.props.map && 
          <img src={this.props.map || ''} />
        }
      </div>
    )
  }
}
