import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* header! any expression that has to be evaluated needs to go inside of curly brackets - anything javascripty*/}
        <Header />
        <Main />
        <Footer  />
      </div>
    )
  }
}
