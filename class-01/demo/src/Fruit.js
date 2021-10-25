import {Component} from 'react';

class Fruit extends Component {

  render() {
    return(
      <p>{this.props.student}'s favorite fruit is: {this.props.favFruit}</p>
    )
  }

}

export default Fruit;