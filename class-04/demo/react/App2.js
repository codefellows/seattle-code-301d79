import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberList: myNumbers
    }
  }


  handleChange = (event) => {
    let selection = event.target.value;
    let updatedNumberArray;

    // if the user chose odd (filter for odd numbers update state)
    // if the user chose even (filter for even numbers update state)
    // if the user chose all - replace state with the original array
    if (selection === "odd") {
      // filter odd update state
      // .filter looks for truthyness, if something is truthy puts the current element in the return array
      updatedNumberArray = myNumbers.filter(num => num % 2 === 1);
      // updatedNumberArray = myNumbers.filter(num => num % 2);
      this.setState({ numberList: updatedNumberArray })
    } else if (selection  === "even") {
      updatedNumberArray = myNumbers.filter(num => num % 2 === 0);
      // updatedNumberArray = myNumbers.filter(num => !(num % 2));
      this.setState({ numberList: updatedNumberArray })
    } else {
      // update state to original list
      this.setState({ numberList: myNumbers })
    }


  }

  render() {
    return (
      <div>
        <Form>
          <Form.Select onChange={this.handleChange} aria-label="Default select example">
            <option>Select a number filter</option>
            <option value="odd">Odd</option>
            <option value="even">Even</option>
            <option value="all">All</option>
          </Form.Select>
        </Form>
        <ListGroup>
          {this.state.numberList.map(number => <ListGroup.Item>{number}</ListGroup.Item>)}
        </ListGroup>
      </div>
    )
  }
}

