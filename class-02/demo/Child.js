import React, { Component } from 'react';
import billy from './assets/billy.jpeg';
import Button from 'react-bootstrap/Button';

export default class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patsOnTheHead: 0 
        }
    }

    // define a function handleClick
    handleClick = () => {
        // when this button is clicked on increase how many times bill has been patted
        console.log('I was clicked');
        // built in react method
        this.setState({ patsOnTheHead: this.state.patsOnTheHead + 1});

    }

    render() {
        return (
            <div>
                <h2>Hi my name is {this.props.name}</h2>
                <img src={billy} alt='the child' />
                <p>Pats on head: {this.state.patsOnTheHead}</p>
                {/* <button ></button> */}
                <Button variant="secondary" onClick={this.handleClick}>I am a button</Button>
            </div>
        )
    }
}

// on click is a listener just like vanilla js
// img.addEventLister('click', handleClick);
// <img onClick={callback}/>

// 2 ways to use an image asset


// when we write a function the contextual this inside that function becomes that function

{/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}