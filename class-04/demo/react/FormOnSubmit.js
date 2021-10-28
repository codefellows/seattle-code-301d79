import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class FormOnSubmit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let name = e.target.userName.value;

    this.setState({ userName: name })
    
    e.target.reset();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="on submit form" />
            <Button type="submit">submit here</Button>
          </Form.Group>
        </Form>
        <h3>{this.state.userName}</h3>
      </div>
    )
  }
}
