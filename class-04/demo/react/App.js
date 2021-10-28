import React, { Component } from 'react';
import FormOnChange from './FormOnChange.js';
import FormOnSubmit from './FormOnSubmit.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <FormOnChange />
        <FormOnSubmit />
      </div>
    )
  }
}
