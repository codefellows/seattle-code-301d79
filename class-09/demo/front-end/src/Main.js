import React, { Component } from 'react';
import axios from 'axios';
import Planets from './Planets.js';
import Starships from './Starships.js';
import Characters from './Characters.js';
import MadLibModal from './MadLibModal.js'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayMadLib: false,
      button: false
    }
  }

  getCharacters = async () => {
    let results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/people`);
    this.setState({ characters: results.data })
  }

  getShips = async () => {
    let results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/starships`);
    this.setState({ starships: results.data })
  }

  getPlanets = async () => {
    let results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/planets`);
    this.setState({ planets: results.data })
  }

  openModal = () => {
    this.setState({ displayMadLib: true })
  }

  closeModal = () => {
    this.setState({ displayMadLib: false })
  }

  componentDidMount() {
    this.getCharacters();
    this.getShips();
    this.getPlanets();
    this.setState({ button: true })
  }
  

  render() {
    return (
      <Container style={{marginTop: "10px"}}>
        <Row sm={3} md={3} lg={3} >
        {this.state.characters && <Characters characters={this.state.characters}/>}
        {this.state.planets && <Planets planets={this.state.planets}/>}
        {this.state.starships && <Starships starships={this.state.starships}/>} 
        </Row>
        {this.state.button && <Button onClick={this.openModal} variant="secondary">Generate Mad Lib</Button>}
        {this.state.displayMadLib && <MadLibModal starships={this.state.starships} planets={this.state.planets} characters={this.state.characters} handleClose={this.closeModal} show={this.state.displayMadLib}/>}
      </Container>
    )
  }
}
