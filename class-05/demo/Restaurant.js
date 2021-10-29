import React, { Component } from 'react'

export default class Restaurant extends Component {
  render() {
    return (
      <section>
        <h3>Restaurants in {this.props.location.search_query}</h3>
        <ul>
          {this.props.restaurants && this.props.restaurants.map((place, idx) => (
            <li key={idx}>
              <p>Name: {place.restaurant}</p>
              <p>{place.restaurant} servers {place.cusine} food in {place.locality}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}


// true && true  true || true
