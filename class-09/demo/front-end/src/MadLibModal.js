import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'

export default class MadLibModal extends Component {

  scramble = (array) => {
    for (let i = 0; i < array.length; i++) {
      let randIndex = Math.floor(Math.random() * array.length);
      let temp = array[randIndex];
      array[randIndex] = array[i];
      array[i] = temp;
    }
  }

  componentDidMount() {
    this.scramble(this.props.characters);
    this.scramble(this.props.planets);
    this.scramble(this.props.starships);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Jabbas New Palace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>If you ever find yourself on the remote {this.props.planets[0].terrain} terrain of {this.props.planets[0].name}, you'll notice pretty quickly that there isn't much in the name of entertainment - unless you happen to wander into Jabba the Hutt's new palace. At any time of the day or night, {this.props.characters[0].name}'s band will be there playing. You can stare into their gorgeous {this.props.characters[0].eye_color} eyes and long to run your fingers through their {this.props.characters[0].hair_color} hair while they serenade you. Of course, {this.props.characters[1].name} will be there too, with all of their friends. Everyone wants to be there but no one wants to catch Jabba's eye and end up his next prisoner like {this.props.characters[3].name}. They came over on their {this.props.starships[3].model}, the {this.props.starships[3].name} to try and trade some stolen goods only to be enslaved by the feared Hutt and frozen in carbonite! You are really better staying on {this.props.planets[2].name} where you will be safe.</p>
        </Modal.Body>
      </Modal>
    )
  }
}
