import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';
// version "react-router-dom": "^5.2.1"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  getCats = async (location = null) => {
    let apiUrl = `http://localhost:3001/cats`;

    if (location) {
      apiUrl += `?location=${location}`;
    }

    try {
      const response = await axios.get(apiUrl);
      this.setState({ cats: response.data });

    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getCats('Seattle')
  }

  render() {
    return (
      <Router>
        <nav>
            <h1>World of Cats</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        {/* everything outside the switch will just on your screen always */}
        <Switch>
          {/* Everything inside the switch will only show depend on the route/path of your url */}
          <Route exact path='/'>
            {this.state.cats.length > 0 ? this.state.cats.map(cat => <li>{cat.name}: {cat.location}</li>): <p>Cats coming soon</p>}
          </Route>
          <Route path='/about'>
            <p>about coming soon</p>
          </Route>
        </Switch>
        
      </Router>
    )
  }
}

