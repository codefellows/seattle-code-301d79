import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Star Wars Mad Lib Generator</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}
