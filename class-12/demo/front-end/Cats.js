import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Cat from './Cat.js';

export default class Cats extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.cats.length > 0 && this.props.cats.map(cat => (
          <ListGroup.Item key={cat._id} >
            <Cat cat={cat} deleteCats={this.props.deleteCats} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}