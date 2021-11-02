import React, { Component } from 'react'
import axios from 'axios';

export default class ShoppingList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shoppingItems: []
    }
  }

  getShoppingItems = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/shoppinglist?name=sara&cbff=hexx`;
    let response = await axios.get(url)
    console.log(response.data)
    this.setState({ shoppingItems: response.data });
  }

  /// when I get data back I will put it in state... if I have the state I will map it and render li's
  // to render I will check if the length of shopping items is greater than zero

  render() {
    return (
      <div>
        <button onClick={this.getShoppingItems}>get shopping items</button>
        {this.state.shoppingItems.length > 0 && this.state.shoppingItems.map(item => <li key={item}>{item}</li>) }
      </div>
    )
  }
}
