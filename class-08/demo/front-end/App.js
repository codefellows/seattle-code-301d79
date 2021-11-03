import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
      photos: []
    }
  }

  getPhotosFromServer = async () => {
  
    // gonna need this
    // send a request with the query being our keyword state

    // make an axios get request to our server with the path of /photos and q of keyWord = our state keyWord
    const url = `${process.env.REACT_APP_SERVER_URL}/photos?keyWord=${this.state.keyWord}`;
    let results = await axios.get(url);
    this.setState({ photos: results.data })
  }
  // serch bar for keyword
  // hit enter we call getphotosFromServer
  // store results in state
  // hit enter and we get stuff back we will render the array of things we get back to the screen (when we have the state we need)

  handleChange = (e) => {
    let val = e.target.value;
    this.setState({keyWord: val});
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange} placeholder="keyword"/>
        <button onClick={this.getPhotosFromServer}>Search!</button>
        {this.state.photos.length > 0 && this.state.photos.map(image => <img key={image.id} src={image.image_url} alt={image.alt_description}/>) }
      </div>
    )
  }
}
