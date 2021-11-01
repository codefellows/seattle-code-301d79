import React, { Component } from 'react';
import axios from 'axios';

// enter a city into a search bar
// reach out via axios to locationIQ and get data back on that city

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cityValue: '',
      error: false
    }
  }

  handleClick = async () => {
    // take the state from cityValue and make an axios request using that city
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
    // Location iq gets hit with a request to this path: https://us1.locationiq.com/v1/search.php... then as part of the request it also gets a seach query object
    // the url needs a few more things search query params
    //     key: YOUR_ACCESS_TOKEN
    // q: SEARCH_STRING
    // format: 'json'
    try {
      let response = await axios.get(url)
      // the response it the entire http response
      // axios calls the body 'data'
      console.log(response.data[0]);
      this.setState({location: response.data[0]})
    } catch (e) {
      console.error(e);
      this.setState({ error: true })
    }
      
  }

  handleChange = (e) => {
    this.setState({ cityValue: e.target.value })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.cityValue}/>
        <p>{this.state.cityValue}</p>
        <button onClick={this.handleClick}>SEARCH!</button>
        {this.state.location && <h1>{this.state.location.display_name}</h1>}
      </div>
    )
  }
}

