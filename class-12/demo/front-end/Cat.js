import React, { Component } from 'react';

export default class Cat extends Component {
  delete = () => {
    this.props.deleteCats(this.props.cat._id);
  }

  render() {
    return (
      <h3>{this.props.cat.name} ({this.props.cat.location}) <span onClick={this.delete}>[X]</span></h3>

    );
  }
}
