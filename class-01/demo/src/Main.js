import {Component} from 'react';
import Fruit from './Fruit.js';

class Main extends Component {
  render() {
    // we can put js here too! Lets use main to house several reusable components
    return(
      <>
      <h3>These are all of our favorite fruits</h3>
        <Fruit student={'Soni'} favFruit={'Peach'}/>
        <Fruit student={'Kevin'} favFruit={'Blueberries'}/>
        <Fruit student={'Ed'} favFruit={'Mango'}/>
        <Fruit student={'Scott'} favFruit={'Passion Fruit'}/>
      </>
    )
  }
}

export default Main;