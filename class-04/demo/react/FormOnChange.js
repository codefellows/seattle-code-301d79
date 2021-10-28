import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class FormOnChange extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    // update the state to be the new change
    this.setState({ userName: e.target.value })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" placeholder="onChange form" value={this.state.value}/>
          </Form.Group>
        </Form>
        <h3>{this.state.userName}</h3>
      </div>
    )
  }
}
