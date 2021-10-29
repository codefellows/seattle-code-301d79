import React, { Component } from 'react';
import location from './fake-data/location.json';
import restaurants from './fake-data/restaurants.json';
import map from './images/map.png';
import Map from './Map.js';
import Restaurant from './Restaurant.js'


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayResults: false,
      locationData: location,
      restaurantsData: restaurants
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.city.value)
    // if they enter in SEATTLE set display results to true
    if (e.target.city.value.toLowerCase() === 'seattle') {
      this.setState({ displayResults: true })
    }
    e.target.reset();
  }
  // CONDITIONAL RENDERING!!!!
  // main component should have some state about my current location
  // only display the good stuff when I have a valid location
  // search bar
  // renders the map and restaurant components weather
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="city">Search for a City
            <input type="text" name="city" placeholder="albaquerquie"/>
          </label>
          <button type="submit">click me</button>
        </form>
        {this.state.displayResults && 
          <div>
            <Map location={this.state.locationData} map={map}/>
            <Restaurant restaurants={this.state.restaurantsData} location={this.state.locationData}/>
          </div>
        
        }
   
      </div> 
    )
  }
}
