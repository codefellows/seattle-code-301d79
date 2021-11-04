import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

